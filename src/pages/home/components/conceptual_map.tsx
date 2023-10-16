import React, { useRef, useEffect, useState } from 'react';
import { HiArrowsExpand, HiChartSquareBar } from 'react-icons/hi';
import moment from 'moment';

interface Square {
  upper_left: {
    x: number;
    y: number;
  };
  upper_right: {
    x: number;
    y: number;
  };
  lower_left: {
    x: number;
    y: number;
  };
  lower_right: {
    x: number;
    y: number;
  };
}

interface Element {
  x: number;
  y: number;
  width: number;
  height: number;
  radiusX?: number;
  radiusY?: number;
  color: string;
  type: string;
  text?: string;
  icon?: React.ReactNode;
  action?: string;
}

const ConceptualMap: React.FC = () => {
  var pre_element:Element = {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    radiusX: 0,
    radiusY: 0,
    color: 'blue',
    type: 'square',
    text: 'test',
  }
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [elements, setElements] = useState<Element[]>([]);
  const [action, setAction] = useState<string>("none");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [newElement, setNewElement] = useState<Element>(pre_element);
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [initialTime, setInitialTime] = useState<number>(0);
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const initialTimeRef = useRef<number | null>(null);
  const [tool, setTool] = useState<string>('none');

  useEffect(() => {
    console.log('action', action);
    console.log('tool', tool);

    if (tool === 'none') {
      setAction('none');
    }
  }, [action, tool]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    const redrawCanvas = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      elements.forEach((element) => {
        ctx.fillStyle = element.color;
        ctx.fillRect(element.x, element.y, element.width, element.height);
      });

      if (selectedElement) {
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;
        ctx.strokeRect(
          selectedElement.x,
          selectedElement.y,
          selectedElement.width,
          selectedElement.height
        );
      }
    };

    redrawCanvas();
  }, [elements, selectedElement]);

  useEffect(() => {
    console.log('selectedElement change:', selectedElement);
  }, [selectedElement]);

  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) return;

      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();

      const parent = canvas.parentElement;

      const { width, height } = parent!.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const drawEllipseWithText = (
    ctx: CanvasRenderingContext2D,
    ellipse: Element
  ) => {
    const { x, y, radiusX, radiusY, color, text, icon } = ellipse;
  
    ctx.beginPath();
    ctx.ellipse(x, y, radiusX?radiusX:0, radiusY?radiusY:0, 0, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
    
    // Draw icon
    if (icon !== undefined && icon !== null) {
      const iconSize = 24; // Adjust the size of the icon as needed
      const iconX = x - iconSize / 2;
      const iconY = y - iconSize / 2;
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = `${iconSize}px Arial`; // Use a suitable font size for the icon
      ctx.fillText(icon.toString(), iconX, iconY);
    }

    // Draw text
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '14px Arial';
    ctx.fillText(text?text:"", x, y);
  };

  const appendElementsAroundTopRight = (event: React.MouseEvent<HTMLCanvasElement>, command:string, square:Square) => {
    if (!selectedElement) return;

    const { x, y } = selectedElement;
    const offsetX = 2; // Offset for the new elements from the selectedElement
    const offsetY = 2;
    const size = 10;
    const radiusX = 10;
    const radiusY = 10;

    if (!canvasRef.current) return;
  
    const updatedElements = elements.filter((element) => element.type !== 'config');
    var newElements: Element[] = [];

    var _array:Element[] = [];
    
    if(command !== 'NOT_IN_CORNER')
    {
      switch (command) {
        case 'UPPER_LEFT':
          // Top-left element
          _array = [
            {
              x: x - size - offsetX,
              y: y,
              radiusX: radiusX,
              radiusY: radiusY,
              width: size, // Specify the desired width of the new element
              height: size, // Specify the desired height of the new element
              color: 'red',
              type: 'config',
            },
            {
              x: x - size - offsetX,
              y: y - size - offsetY,
              radiusX: radiusX,
              radiusY: radiusY,
              width: size, // Specify the desired width of the new element
              height: size, // Specify the desired height of the new element
              color: 'red',
              type: 'config',
            },
            {
              x: x,
              y: y - offsetY - size,
              radiusX: radiusX,
              radiusY: radiusY,
              width: size, // Specify the desired width of the new element
              height: size, // Specify the desired height of the new element
              color: 'red',
              type: 'config',
            },
            {
              x: x - (size / 2),
              y: y - (size / 2),
              radiusX: radiusX,
              radiusY: radiusY,
              width: size, // Specify the desired width of the new element
              height: size, // Specify the desired height of the new element
              color: 'red',
              type: 'config',
            }
          ];
          break;
        case 'LOWER_LEFT':
          // Bottom left element
          _array = [
            {
              x: square.lower_left.x - size - offsetX,
              y: square.lower_left.y + offsetY,
              radiusX: radiusX,
              radiusY: radiusY,
              width: size,
              height: size,
              color: 'red',
              type: 'config',
            },
            {
              x: square.lower_left.x,
              y: square.lower_left.y + offsetY,
              radiusX: radiusX,
              radiusY: radiusY,
              width: size,
              height: size,
              color: 'red',
              type: 'config',
            },
            {
              x: square.lower_left.x - offsetX - size,
              y: square.lower_left.y - size,
              radiusX: radiusX,
              radiusY: radiusY,
              width: size,
              height: size,
              color: 'red',
              type: 'config',
            },
            {
              x: square.lower_left.x - (size / 2),
              y: square.lower_left.y - (size / 2),
              radiusX: radiusX,
              radiusY: radiusY,
              width: size,
              height: size,
              color: 'red',
              type: 'config',
            }
          ];
          break;
        case 'UPPER_RIGHT':
          // Top-right element
          _array = [
            {
              x: square.upper_right.x + offsetX,
              y: square.upper_right.y,
              radiusX: radiusX,
              radiusY: radiusY,
              width: size,
              height: size,
              color: 'red',
              type: 'config',
            },
            {
              x: square.upper_right.x + offsetX,
              y: square.upper_right.y - size - offsetY,
              radiusX: radiusX,
              radiusY: radiusY,
              width: size,
              height: size,
              color: 'red',
              type: 'config',
            },
            {
              x: square.upper_right.x - size,
              y: square.upper_right.y - offsetY - size,
              radiusX: radiusX,
              radiusY: radiusY,
              width: size,
              height: size,
              color: 'red',
              type: 'config',
            },
            {
              x: square.upper_right.x - (size / 2),
              y: square.upper_right.y - (size / 2),
              radiusX: radiusX,
              radiusY: radiusY,
              width: size,
              height: size,
              color: 'red',
              type: 'config',
            }
          ];
          break;
        case 'LOWER_RIGHT':
          // Bottom right element
          _array = [
            {
              x: square.lower_right.x,
              y: square.lower_right.y + offsetY,
              radiusX: radiusX,
              radiusY: radiusY,
              width: size,
              height: size,
              color: 'red',
              type: 'config',
            },
            {
              x: square.lower_right.x - size - offsetX,
              y: square.lower_right.y + offsetY,
              radiusX: radiusX,
              radiusY: radiusY,
              width: size,
              height: size,
              color: 'red',
              type: 'config',
            },
            {
              x: square.lower_right.x + offsetX,
              y: square.lower_right.y - size,
              radiusX: radiusX,
              radiusY: radiusY,
              width: size,
              height: size,
              color: 'red',
              type: 'config',
            },
            {
              x: square.lower_right.x - (size / 2),
              y: square.lower_right.y - (size / 2),
              radiusX: radiusX,
              radiusY: radiusY,
              width: size,
              height: size,
              color: 'red',
              type: 'config',
            }
          ];
          break;
      }

      for(var i=0; i<_array.length; i++)
      {
        var _element = _array[i];
        newElements.push(_element);
      }
      // Add the new elements to the existing elements state
      
    }
  
    setElements([...updatedElements, ...newElements]);
  };
  
  const handleCanvasMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    var _mouseX = event.clientX - rect.left;
    var _mouseY = event.clientY - rect.top;

    var currentTime = new Date();
    initialTimeRef.current = currentTime.getTime();
    var duration = 0;
    
    timerRef.current = setInterval(() => {
      var _currentTime = new Date();

      duration = Math.abs((_currentTime.getTime() - currentTime.getTime()) / 1000);
      
      // console.log('duration', duration);
      var __mouseX = event.clientX - rect.left;
      var __mouseY = event.clientY - rect.top;

      setTimeout(() => {        
      
        if (selectedElement && tool === 'none' && (__mouseX !== _mouseX || __mouseY !== _mouseY)) {
          setAction('MOVE');
        }
      }, 100);

      // if (duration > 1 && action !== 'MOVE') {
      //   if (selectedElement && tool === 'square' && (__mouseX === _mouseX || __mouseY === _mouseY)) {
      //     setAction('EDIT');
      //   }
      // } 
      
      if (!selectedElement && tool !== 'none' && action !== 'MOVE') {
        setAction('CREATE');
      } 
        
    }, 100);

    setMouseX(_mouseX);
    setMouseY(_mouseY);

    setInitialTime(new Date().getTime());
  };

  const handleCanvasMouseUp = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;

    setIsDragging(false)  
    
    console.log("action", action)

    if (timerRef.current) {
      console.log('timer reset')
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    var _mouseX = event.clientX - rect.left;
    var _mouseY = event.clientY - rect.top;

    if (action == "EDIT") {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const _mouseX = event.clientX - rect.left;
      const _mouseY = event.clientY - rect.top;

      const updatedElements = elements.map((element, index) => {
        if (index === elements.indexOf(selectedElement!)) {
          return {
            ...element,
            width: _mouseX - element.x,
            height: _mouseY - element.y,
          };
        }
        return element;
      });

      setElements(updatedElements);

      setAction("CREATE");
    }
    if (action == "CREATE") {
      if (tool === 'square') {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        var _mouseX = event.clientX - rect.left;
        var _mouseY = event.clientY - rect.top;

        var width = _mouseX - mouseX
        var height = _mouseY - mouseY

        const newElement: Element = {
          x: mouseX,
          y: mouseY,
          width: width,
          height: height,
          color: 'blue',
          type: 'square',
        };

        setElements([...elements, newElement]);
      }
    }
    if (action == "DELETE") {
      const updatedElements = elements.filter((element) => element !== selectedElement);
      setElements(updatedElements);
    }
    if (action == "MOVE") {
      console.log("MOVE Done")
    }
  };

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;

    var currentTime = new Date().getTime();
    setInitialTime(currentTime)

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const _mouseX = event.clientX - rect.left;
    const _mouseY = event.clientY - rect.top;

    if(selectedElement !== null && selectedElement !== undefined){
      setIsDragging(true)
    }

    console.log("selected element : ", selectedElement)

    //appendElementsAroundTopRight()
  };

  const handleCanvasMove = (event: React.MouseEvent<HTMLCanvasElement>) => {

    // console.log('elements : ', elements)

    const updatedElements = elements.filter((element) => element.type !== 'point');
    // console.log('elements update: ', updatedElements);

    if (!canvasRef.current) return;

    // console.log('elements next : ', elements)
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const _mouseX = event.clientX - rect.left;
    const _mouseY = event.clientY - rect.top;

    setX(_mouseX);
    setY(_mouseY);

    if (tool === 'line') {

      const newElement: Element = {
          x: _mouseX,
          y: _mouseY,
          width: 5,
          height: 5,
          color: 'blue',
          type: 'point',
      };
    
      setElements([...updatedElements, newElement]);
    }
  };

  const getMouseCorner = (mouseX:number, mouseY:number, square:Square): string => {
    if ((mouseX < square.upper_left.x + 6 && mouseX > square.upper_left.x) && (mouseY < square.upper_left.y + 6 && mouseY > square.upper_left.y)) {
      return "UPPER_LEFT";
    } else if ((mouseX >= square.upper_right.x - 6 && mouseX <= square.upper_right.x) && (mouseY < square.upper_right.y + 6 && mouseY >= square.upper_right.y)) {
      return "UPPER_RIGHT";
    } else if ((mouseX < square.lower_left.x + 6 && mouseX >= square.lower_left.x) && (mouseY > square.lower_left.y - 6 && mouseY <= square.lower_left.y)) {
      return "LOWER_LEFT";
    } else if ((mouseX > square.lower_right.x - 6 && mouseX <= square.lower_right.x) && (mouseY > square.lower_right.y - 6 && mouseY <= square.lower_right.y)) {
      return "LOWER_RIGHT";
    } else {
      return "NOT_IN_CORNER";
    }
  }

  // Done
  const handleElementDrag = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;

    handleCanvasMove(event);
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const _mouseX = event.clientX - rect.left;
    const _mouseY = event.clientY - rect.top;
    console.log(`mouseX: ${_mouseX}, mouseY: ${_mouseY}`);
    var selected = elements.find((element) => {

      let f_x = element.x
      let f_y = element.y
      let f_width = element.x + element.width
      let f_height = element.y + element.height

      if (element.width < 0) {
        f_x = element.x + element.width

        f_width = element.x
      }

      if (element.height < 0) {
        f_y = element.y + element.height

        f_height = element.y
      }

      if (element.type !== 'config') {

        console.log(`mouseX: ${_mouseX}, mouseY: ${_mouseY}`);
        console.log(`f_x: ${f_x}, f_y: ${f_y}, f_width: ${f_width}, f_height: ${f_height}`);

        // Top-right element
        // _
        //|_| 
        let square: Square = {
          upper_left: {
            x: f_x,
            y: f_y,
          },
          upper_right: {
            x: f_width,
            y: f_y,
          },
          lower_left: {
            x: f_x,
            y: f_height,
          },
          lower_right: {
            x: f_width,
            y: f_height,
          }
        }
        
        
        let corner = getMouseCorner(_mouseX, _mouseY, square)
        console.log("corner : ", corner)

        appendElementsAroundTopRight(event, corner, square);
      }

      return (
        _mouseX >= f_x &&
        _mouseX <= f_width &&
        _mouseY >= f_y &&
        _mouseY <= f_height &&
        element.type !== 'config'
      );

    });

    if (isSearching === true && selected !== selectedElement && selected !== undefined && selected !== null){
      setSelectedElement(selected)
      setIsSearching(false)
    }
    else if (selected == null) {
      //setSelectedElement(null);
      setIsSearching(true)
    }
  };

  const handleElementRelease = () => {
    setSelectedElement(null);
  };

  const scrollSpeed = 0.5;

  const handleScroll = (event: React.WheelEvent<HTMLCanvasElement>) => {
    const deltaY = event.deltaY;
    const deltaX = event.deltaX;
    performScroll(deltaX,deltaY);
  }

  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number>(0);

  const handleTouchStart = (event: React.TouchEvent<HTMLCanvasElement>) => {
    console.log('touch start');
    const touch = event.touches[0];
    setTouchStartY(touch.clientY);
    setTouchStartX(touch.clientX);
  }

  const handleTouchMove = (event: React.TouchEvent<HTMLCanvasElement>) => {
    const touch = event.touches[0];
    const deltaY = touch.clientY - touchStartY;
    const deltaX = touch.clientX - touchStartX;
    performScroll(deltaX,deltaY);
    event.preventDefault();
  }

  const performScroll = (deltaX: number,deltaY: number) => {
    if (!canvasRef.current) return;

    // Get the canvas context
    const ctx = canvasRef.current.getContext('2d');

    if (!ctx) return;

    // Clear the entire canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    // Translate the canvas context based on the scroll input
    ctx.translate(0, deltaY * scrollSpeed);

    // Redraw your canvas content here using the updated context
    handleReDraw(deltaX, deltaY)
  }

  const handleReDraw = (deltaX:number, deltaY:number) => {
    setElements(prevElements => prevElements.map(element => ({
      ...element,
      x: element.x + deltaX,
      y: element.y + deltaY
    })));
  }

  return (
    <>
      <div className='p-2 flex flex-wrap items-center fixed'>
        <div className='p-1 bg-blue-200' onClick={() => setTool('none')}>
          <HiArrowsExpand />
        </div>
        <div className='p-1 bg-blue-200' onClick={() => setTool('square')}>
          <HiChartSquareBar/>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        onMouseMove={handleElementDrag}
        onMouseUp={handleCanvasMouseUp}
        onMouseDown={handleCanvasMouseDown}
        onWheel={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        style={{ border: '1px solid black' }}
      />
    </>
  );
};

export default ConceptualMap;
