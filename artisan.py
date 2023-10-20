import os
import sys

# Define the base directory and apps directory
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
APPS_DIR = os.path.join(BASE_DIR, "apps")

input("Press Enter to continue...")

print("This are the options ...")

def change_to_plural(word):
    word = word.lower()
    if word.endswith("y"):
        word = word[:-1]
        word = f"{word}ies"
    elif word.endswith("s"):
        word = f"{word}es"
    else:
        word = f"{word}s"
    return word

options = [
    "init_app",
    "create_new_endpoint",
    "create_new_qa_template",
    "init_redux_structure",
    "add_redux_method",
]

for index, app in enumerate(options):
    print(f"{index + 1}-{app}")

option = input("Enter the number of the option to work with: ")

if option == "1":

    # Get the name of the app to work with from user input
    app_name = input("Enter the name of the app to work with: ")
    task_name = input("Enter the task (init, addmethod, addhelpermethod, addhelper): ")
    model_name = input("Enter the name of the model to use next: ")

    if task_name == "addmethod" or task_name == "addhelpermethod":
        method_name = input("Enter the name of the method: ")

    if task_name == "addhelpermethod":
        pass

    # Define the package structure for the app as an array of directories
    PACKAGE_STRUCTURE = [
        "application/repositories_interfaces",
        "application/services",
        "application/services_interfaces",
        "domain/models",
        "domain/requests",
        "domain/responses",
        "helpers",
        "infrastructure/repositories",
        "presentation/controllers",
    ]

    # Create the directory for the app if it doesn't exist
    app_dir = os.path.join(APPS_DIR, app_name)
    if not os.path.exists(app_dir):
        os.makedirs(app_dir)

    # Create the package structure for the app
    for directory in PACKAGE_STRUCTURE:
        directory_path = os.path.join(app_dir, *directory.split("/"))
        if not os.path.isdir(directory_path):
            os.makedirs(directory_path)

        directory_name = directory.split('/')[-1]
        subfix = directory_name

        subfix = subfix.replace("ies", "y")
        subfix = subfix.replace("ces", "ce")
        model_name = model_name.replace("ies", "y")
        model_name = model_name.replace("ces", "ce")

        if subfix.endswith("ies"):
            subfix = subfix[:-3]
            subfix = f"{subfix}y"

        elif subfix.endswith("s"):
            subfix = subfix[:-1]
        
        file_name = f"{directory_path}/{model_name}_{subfix}.py"
        class_name = f""

        if not os.path.exists(file_name):
            with open(file_name, "w") as f:
                if "model" not in directory_name:
                    pass
                
                class_name = f"{model_name}_{subfix}"
                class_name = class_name.split("_")
                class_name = " ".join(class_name).title()
                class_name = class_name.replace(" ", "")

                model_class_name = f"{model_name}"
                model_class_name = model_class_name.split("_")
                model_class_name = " ".join(model_class_name).title()
                model_class_name = model_class_name.replace(" ", "")

                if "model" in subfix:
                    f.write(f"class {class_name}:\n")
                    f.write(f"    def __init__(self):\n")
                    f.write(f"        pass\n")
                    f.write(f"\n")

                elif "helper" in subfix:
                    f.write(f"class {class_name}:\n")
                    f.write(f"    def __init__(self):\n")
                    f.write(f"        pass\n")
                    f.write(f"\n")

                elif "request" in subfix:
                    f.write(f"class {class_name}:\n")
                    f.write(f"    def __init__(self):\n")
                    f.write(f"        pass\n")
                    f.write(f"\n")

                elif "interface" in subfix:
                    f.write(f"from abc import ABC, abstractmethod\n")
                    f.write(f"from apps.{app_name}.domain.models.{model_name}_model import {model_class_name}Model\n")

                    f.write(f"class {class_name}(ABC):\n")
                    f.write(f"    def __init__(self):\n")
                    f.write(f"        super().__init__()\n")
                    f.write(f"\n")

                elif "repository" in subfix and "interface" not in subfix:
                    import_path = f"{directory}_interfaces/{model_name}_{subfix}_interface".split("/")
                    import_path = ".".join(import_path)
                    f.write(f"from apps.{app_name}.application.repositories_interfaces.{model_name}_{subfix}_interface import {class_name}Interface\n")
                    f.write(f"from apps.{app_name}.domain.models.{model_name}_model import {model_class_name}Model\n")

                    f.write(f"class {class_name}({class_name}Interface):\n")
                    f.write(f"    def __init__(self):\n")
                    f.write(f"        super().__init__()\n")

                elif "service" in subfix and "interface" not in subfix:
                    import_path = f"{directory}_interfaces/{model_name}_{subfix}_interface".split("/")
                    import_path = ".".join(import_path)
                    f.write(f"from apps.{app_name}.application.services_interfaces.{model_name}_{subfix}_interface import {class_name}Interface\n")
                    f.write(f"from apps.{app_name}.infrastructure.repositories.{model_name}_repository import {class_name.replace('Service','')}Repository\n")
                    f.write(f"from apps.{app_name}.domain.models.{model_name}_model import {model_class_name}Model\n")

                    f.write(f"class {class_name}({class_name}Interface):\n")
                    r_subfix = f"_{subfix.title()}"
                    f.write(f"    def __init__(self):\n")
                    f.write(f"        super().__init__()\n")
                    f.write(f"        self.{model_name}_repository = {class_name.replace('Service', '')}Repository()\n")

                elif "controller" in subfix and "interface" not in subfix:
                    f.write(f"from apps.{app_name}.application.services.{model_name}_service import {class_name.replace('Controller', 'Service')}\n")
                    f.write(f"from apps.{app_name}.domain.models.{model_name}_model import {model_class_name}Model\n")

                    f.write(f"class {class_name}:\n")
                    r_subfix = f"_{subfix.title()}"
                    f.write(f"    def __init__(self):\n")
                    f.write(f"        super().__init__()\n")
                    f.write(f"        self.{model_name}_service = {class_name.replace('Controller', 'Service')}()\n")
                
                f.write(f"\n")
        
        else:
            print(f"{file_name} already exists")
            with open(file_name, "a") as f:
                f.write(f"\n")

        with open(file_name, "a") as f:
            parameter = model_name.split("_")
            parameter = " ".join(parameter).title()
            parameter = "".join(parameter.split(" "))
            if "interface" in subfix:
                f.write(f"    @abstractmethod\n")
                f.write(f"    def {method_name}(self, {model_name}_model: {parameter}Model):\n")
                f.write(f"        return {model_name}_model\n")
            elif "repository" in subfix:
                f.write(f"    def {method_name}(self, {model_name}_model: {parameter}Model):\n")
                f.write(f"        return {model_name}_model\n")
            elif "service" in subfix:
                f.write(f"    def {method_name}(self, {model_name}_model: {parameter}Model):\n")
                f.write(f"        return self.{model_name}_repository.{method_name}({model_name}_model)\n")
            elif "controller" in subfix:
                f.write(f"    def {method_name}(self, {model_name}_model: {parameter}Model):\n")
                f.write(f"        return self.{model_name}_service.{method_name}({model_name}_model)\n")

        print(f"Created {file_name}")

elif option == "4":

    actions = ["PUT", "GET", "POST", "DELETE"]

    path = os.path.join(os.getcwd(), 'src')

    where = input("Where do you want to create the redux structure? (src/[your-path]): input [your-path]")
    
    model_name = input("Enter the name of the model to use next: ")
    
    folders = where.split("/")

    for folder in folders:
        path = os.path.join(path, folder)
        if not os.path.exists(path):
            os.makedirs(path)

    if not model_name:
        print('Usage: python create_redux_structure.py <model_name>')
        sys.exit(1)

    model_name_capitalize = model_name.capitalize()
    model_name_lower = model_name.lower()

    model_name_separeted = model_name.split("_")
    if len(model_name_separeted) > 1:
        model_name_capitalize = ""
        model_name_lower = ""
        for index, word in enumerate(model_name_separeted):
            model_name_capitalize += word.capitalize()
            print(index, word)
            if index == 0:
                model_name_lower += word.lower()
            else:
                model_name_lower += "_" + word.capitalize()

    root_dir = os.path.join(path, 'redux')
    reducers_dir = os.path.join(root_dir, 'reducers')
    actions_dir = os.path.join(root_dir, 'actions')

    # Create directories if they don't exist
    os.makedirs(root_dir, exist_ok=True)
    os.makedirs(reducers_dir, exist_ok=True)
    os.makedirs(actions_dir, exist_ok=True)

    # Create reducer template
    reducer_template = """
import { {model_name_capitalize}ActionTypes, {model_name_capitalize}State, {model_name_capitalize}Request } from '../types/{model_name}_types';
import axios from 'axios'
axios.defaults.withCredentials = true;

const initialState: {model_name_capitalize}State = {
    id: 0,
    name: '',
    data: [],
    {plural_model_name_lower}: [],
    error: null,
    message: '',
    loading: false,
    selected: null,
    deleted: null,
    new_one: null,
    new_ones: [],
};

const {model_name_capitalize}Reducer = (state = initialState, action: {model_name_capitalize}ActionTypes) => {
    switch (action.type) {
        
        case 'POST_{model_name_upper}':
            return {...state, {plural_model_name_lower}: action.payload.{plural_model_name_lower}, error: null, message: action.payload.message};
        case 'POST_SUCCESS_{model_name_upper}':
            return {...state, error: null, message: action.payload.message};
        case 'POST_FAIL_{model_name_upper}':
            return {...state, error: action.payload.error, message: action.payload.message};
        
        case 'PUT_{model_name_upper}':
            return {...state, data: []};
        case 'PUT_SUCCESS_{model_name_upper}':
            return {...state, error: null, message: action.payload.message};
        case 'PUT_FAIL_{model_name_upper}':
            return {...state, error: action.payload.error, message: action.payload.message};
        
        case 'UPDATE_{model_name_upper}':
            return {...state, data: []};
        case 'UPDATE_SUCCESS_{model_name_upper}':
            return {...state, error: null, message: action.payload.message};
        case 'UPDATE_FAIL_{model_name_upper}':
            return {...state, error: action.payload.error, message: action.payload.message};
            
        case 'DELETE_{model_name_upper}':
            return {...state, {plural_model_name_lower}: action.payload.{plural_model_name_lower}?.filter((x:{model_name_capitalize}Request) => x.id !== action.payload.deleted?.id), error: null, message: action.payload.message};
        case 'DELETE_SUCCESS_{model_name_upper}':
            return {...state, error: null, message: action.payload.message};
        case 'DELETE_FAIL_{model_name_upper}':
            return {...state, error: action.payload.error, message: action.payload.message};
        
        case 'GET_{model_name_upper}':
            return {...state, data: []};
        case 'GET_SUCCESS_{model_name_upper}':
            return {...state, error: null, message: action.payload.message};
        case 'GET_FAIL_{model_name_upper}':
            return {...state, error: action.payload.error, message: action.payload.message};
// [ANCHOR_1]

        case 'SELECT_{model_name_upper}':
            return {...state, selected: action.payload};
        case 'SELECT_SUCCESS_{model_name_upper}':
            return {...state, error: null, message: action.payload.message};
        case 'SELECT_FAIL_{model_name_upper}':
            return {...state, error: action.payload.error, message: action.payload.message};

        case 'START_LOADING':
            return {...state, loading: true};
        case 'END_LOADING':
            return {...state, loading: false};
        default:
            return state;
    }
};

export default {model_name_capitalize}Reducer;
    """

    # Create action template
    action_template = """
import { Dispatch } from 'redux';
import { {model_name_capitalize}ActionTypes, {model_name_capitalize}Request, {model_name_capitalize}State } from '../types/{model_name}_types';
import axios from 'axios';
axios.defaults.withCredentials = true;

export const post{model_name_capitalize} = (data: {model_name_capitalize}Request) => async (dispatch: Dispatch<{model_name_capitalize}ActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/legal-surfer/{model_name}`, data);
        dispatch({ type: 'POST_{model_name_upper}', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'POST_SUCCESS_{model_name_upper}', payload: {...response.data, error: null, message: "POST_{model_name_upper}_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'POST_FAIL_{model_name_upper}', payload: {...data, error: error, message: "POST_{model_name_upper}_FAIL"} });
    }
}};

export const put{model_name_capitalize} = (data: {model_name_capitalize}Request) => async (dispatch: Dispatch<{model_name_capitalize}ActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/api/legal-surfer/{model_name}?id=${data.id}&name=${data.name}`);
        dispatch({ type: 'PUT_{model_name_upper}', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'PUT_SUCCESS_{model_name_upper}', payload: {...response.data, error: null, message: "PUT_{model_name_upper}_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'PUT_FAIL_{model_name_upper}', payload: {...data, error: error, message: "PUT_{model_name_upper}_FAIL"} });
    }
}};

export const update{model_name_capitalize} = (data: {model_name_capitalize}Request) => async (dispatch: Dispatch<{model_name_capitalize}ActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/api/legal-surfer/{model_name}?id=${data.id}&name=${data.name}`);
        dispatch({ type: 'UPDATE_{model_name_upper}', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'UPDATE_SUCCESS_{model_name_upper}', payload: {...response.data, error: null, message: "UPDATE_{model_name_upper}_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'UPDATE_FAIL_{model_name_upper}', payload: {...data, error: error, message: "UPDATE_{model_name_upper}_FAIL"} });
    }
}};

export const delete{model_name_capitalize} = (data: {model_name_capitalize}Request) => async (dispatch: Dispatch<{model_name_capitalize}ActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/legal-surfer/{model_name}?id=${data.id}&name=${data.name}`);
        dispatch({ type: 'DELETE_{model_name_upper}', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'DELETE_SUCCESS_{model_name_upper}', payload: {...response.data, error: null, message: "DELETE_{model_name_upper}_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'DELETE_FAIL_{model_name_upper}', payload: {...data, error: error, message: "DELETE_{model_name_upper}_FAIL"} });
    }
}};

export const get{model_name_capitalize} = (data: {model_name_capitalize}Request) => async (dispatch: Dispatch<{model_name_capitalize}ActionTypes>) => {{
    try {
        dispatch({ type: 'START_LOADING', payload: {...data, error: null, message: "START_LOADING"} });
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/legal-surfer/{model_name}?id=${data.id}&name=${data.name}`);
        
        dispatch({ type: 'GET_{model_name_upper}', payload: response.data });
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'GET_SUCCESS_{model_name_upper}', payload: {...response.data, error: null, message: "GET_{model_name_upper}_SUCCESS"} });
    } catch (error) {
        dispatch({ type: 'END_LOADING', payload: {...data, error: null, message: "END_LOADING"} });
        dispatch({ type: 'GET_FAIL_{model_name_upper}', payload: {...data, error: error, message: "GET_{model_name_upper}_FAIL"} });
    }
}};
// [ANCHOR_1]
    """

    # Write the templates to files
    reducer_file_path = os.path.join(reducers_dir, f'{model_name}_reducer.ts')
    reducer_template = reducer_template.replace(
                '{model_name}', model_name
            )
    reducer_template = reducer_template.replace(
                '{model_name_upper}', model_name.upper()
            )
    reducer_template = reducer_template.replace(
                "{model_name_capitalize}", model_name_capitalize
            )
    reducer_template = reducer_template.replace(
            "{plural_model_name_lower}", change_to_plural(model_name_lower)
        )

    with open(reducer_file_path, 'w') as reducer_file:
        reducer_file.write(
            reducer_template
        )

    action_file_path = os.path.join(actions_dir, f'{model_name}_action.ts')
    action_template = action_template.replace(
            '{model_name}', model_name
        )
    action_template = action_template.replace(
            '{model_name_upper}', model_name.upper()
        )
    action_template = action_template.replace(
            "{model_name_capitalize}", model_name_capitalize
        )
    action_template = action_template.replace(
            "{plural_model_name_lower}", change_to_plural(model_name_lower)
        )
    with open(action_file_path, 'w') as action_file:
        action_file.write(
            action_template
        )

    if not model_name:
        print('Usage: python create types file <model_name>')
        sys.exit(1)

    # Create types template
    types_template = """
export interface {model_name_capitalize} {
    id: number;
    name: string;
}

export interface {model_name_capitalize}Request {
    id: number;
    name: string;
    error?: any;
    message?: string;
}

export interface {model_name_capitalize}Response {
    id: number;
    name: string;
    data: {model_name_capitalize}Request[];
    error?: any;
    message?: string;
    loading?: boolean;
    selected?: {model_name_capitalize}Request | null;
    deleted?: {model_name_capitalize}Request | null;
    new_one?: {model_name_capitalize}Request | null;
    new_ones?: {model_name_capitalize}Request[];
    {plural_model_name_lower}?: {model_name_capitalize}Request[];
}

export type {model_name_capitalize}State = {model_name_capitalize}Response;

export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';
export const SELECT_{model_name_upper} = 'SELECT_{model_name_upper}'
export const SELECT_SUCCESS_{model_name_upper} = 'SELECT_SUCCESS_{model_name_upper}'
export const SELECT_FAIL_{model_name_upper} = 'SELECT_FAIL_{model_name_upper}'
export const POST_{model_name_upper} = 'POST_{model_name_upper}';
export const POST_SUCCESS_{model_name_upper} = 'POST_SUCCESS_{model_name_upper}';
export const POST_FAIL_{model_name_upper} = 'POST_FAIL_{model_name_upper}';
export const PUT_{model_name_upper} = 'PUT_{model_name_upper}';
export const PUT_SUCCESS_{model_name_upper} = 'PUT_SUCCESS_{model_name_upper}';
export const PUT_FAIL_{model_name_upper} = 'PUT_FAIL_{model_name_upper}';
export const UPDATE_{model_name_upper} = 'UPDATE_{model_name_upper}';
export const UPDATE_SUCCESS_{model_name_upper} = 'UPDATE_SUCCESS_{model_name_upper}';
export const UPDATE_FAIL_{model_name_upper} = 'UPDATE_FAIL_{model_name_upper}';
export const DELETE_{model_name_upper} = 'DELETE_{model_name_upper}';
export const DELETE_SUCCESS_{model_name_upper} = 'DELETE_SUCCESS_{model_name_upper}';
export const DELETE_FAIL_{model_name_upper} = 'DELETE_FAIL_{model_name_upper}';
export const GET_{model_name_upper} = 'GET_{model_name_upper}';
export const GET_SUCCESS_{model_name_upper} = 'GET_SUCCESS_{model_name_upper}';
export const GET_FAIL_{model_name_upper} = 'GET_FAIL_{model_name_upper}';
// [ANCHOR_1]

interface Post{model_name_capitalize}Action {
type: typeof POST_{model_name_upper};
payload: {model_name_capitalize}State;
}

interface PostSuccess{model_name_capitalize}Action {
type: typeof POST_SUCCESS_{model_name_upper};
payload: {model_name_capitalize}State;
}

interface PostError{model_name_capitalize}Action {
type: typeof POST_FAIL_{model_name_upper};
payload: {model_name_capitalize}Request;
}

interface Put{model_name_capitalize}Action {
type: typeof PUT_{model_name_upper};
payload: {model_name_capitalize}State;
}

interface PutSuccess{model_name_capitalize}Action {
type: typeof PUT_SUCCESS_{model_name_upper};
payload: {model_name_capitalize}State;
}

interface PutError{model_name_capitalize}Action {
type: typeof PUT_FAIL_{model_name_upper};
payload: {model_name_capitalize}Request;
}

interface Update{model_name_capitalize}Action {
type: typeof UPDATE_{model_name_upper};
payload: {model_name_capitalize}State;
}

interface UpdateSuccess{model_name_capitalize}Action {
type: typeof UPDATE_SUCCESS_{model_name_upper};
payload: {model_name_capitalize}State;
}

interface UpdateError{model_name_capitalize}Action {
type: typeof UPDATE_FAIL_{model_name_upper};
payload: {model_name_capitalize}Request;
}

interface Delete{model_name_capitalize}Action {
type: typeof DELETE_{model_name_upper};
payload: {model_name_capitalize}State;
}

interface DeleteSuccess{model_name_capitalize}Action {
type: typeof DELETE_SUCCESS_{model_name_upper};
payload: {model_name_capitalize}State;
}

interface DeleteError{model_name_capitalize}Action {
type: typeof DELETE_FAIL_{model_name_upper};
payload: {model_name_capitalize}Request;
}

interface Get{model_name_capitalize}Action {
type: typeof GET_{model_name_upper};
payload: {model_name_capitalize}State;
}

interface GetSuccess{model_name_capitalize}Action {
type: typeof GET_SUCCESS_{model_name_upper};
payload: {model_name_capitalize}State;
}

interface GetError{model_name_capitalize}Action {
type: typeof GET_FAIL_{model_name_upper};
payload: {model_name_capitalize}Request;
}
// [ANCHOR_2]

interface StartLoadingAction {
type: typeof START_LOADING;
payload: {model_name_capitalize}Request;
}

interface EndLoadingAction {
type: typeof END_LOADING;
payload: {model_name_capitalize}Request;
}

interface Select{model_name_capitalize}Action {
type: typeof SELECT_{model_name_upper};
payload: {model_name_capitalize}Request;
}

interface SelectSuccess{model_name_capitalize}Action {
type: typeof SELECT_SUCCESS_{model_name_upper};
payload: {model_name_capitalize}Request;
}

interface SelectError{model_name_capitalize}Action {
type: typeof SELECT_FAIL_{model_name_upper};
payload: {model_name_capitalize}Request;
}

export type {model_name_capitalize}ActionTypes = 
StartLoadingAction
| EndLoadingAction
| Select{model_name_capitalize}Action 
| SelectSuccess{model_name_capitalize}Action 
| SelectError{model_name_capitalize}Action 
| Post{model_name_capitalize}Action 
| PostSuccess{model_name_capitalize}Action 
| PostError{model_name_capitalize}Action 
| Put{model_name_capitalize}Action 
| PutSuccess{model_name_capitalize}Action 
| PutError{model_name_capitalize}Action 
| Update{model_name_capitalize}Action 
| UpdateSuccess{model_name_capitalize}Action 
| UpdateError{model_name_capitalize}Action 
| Delete{model_name_capitalize}Action 
| DeleteSuccess{model_name_capitalize}Action 
| DeleteError{model_name_capitalize}Action 
| Get{model_name_capitalize}Action 
| GetSuccess{model_name_capitalize}Action 
| GetError{model_name_capitalize}Action 
// [ANCHOR_3]
    """

    types_template = types_template.replace(
            '{model_name}', model_name
        )
    types_template = types_template.replace(
            '{model_name_upper}', model_name.upper()
        )
    types_template = types_template.replace(
            "{model_name_capitalize}", model_name_capitalize
        )
    types_template = types_template.replace(
            "{plural_model_name_lower}", change_to_plural(model_name_lower)
        )
    
    # Construct the folder path
    folder_path = os.path.join(root_dir, 'types')

    # Check if the folder exists
    if not os.path.exists(folder_path):
        # Create the folder if it doesn't exist
        os.makedirs(folder_path)
        print(f"Folder '{folder_path}' created.")
        
    # Write the template to the types file
    with open(f'{root_dir}/types/{model_name}_types.ts', 'w') as types_file:
        types_file.write(
            types_template
        )

    print(f'Types file for "{model_name}" created successfully.')

elif option == "5":

    actions = input("write as many method you need separed by commas:")

    actions = actions.split(',')

    path = os.path.join(os.getcwd(), 'src')

    where = input("Where do you want to create the redux structure? (src/[your-path]): input [your-path]")

    model_name = input("Enter the name of the model to use next: ")

    folders = where.split("/")

    for folder in folders:
        path = os.path.join(path, folder)
        if not os.path.exists(path):
            os.makedirs(path)

    if not model_name:
        print('Usage: python create_redux_structure.py <model_name>')
        sys.exit(1)

    model_name_capitalize = model_name.capitalize()
    model_name_lower = model_name.lower()

    model_name_separeted = model_name.split("_")
    if len(model_name_separeted) > 1:
        model_name_capitalize = ""
        model_name_lower = ""
        for index, word in enumerate(model_name_separeted):
            model_name_capitalize += word.capitalize()
            print(index, word)
            if index == 0:
                model_name_lower += word.lower()
            else:
                model_name_lower += "_" + word.capitalize()

    root_dir = os.path.join(path, 'redux')
    reducers_dir = os.path.join(root_dir, 'reducers')
    actions_dir = os.path.join(root_dir, 'actions')

    # Create directories if they don't exist
    os.makedirs(root_dir, exist_ok=True)
    os.makedirs(reducers_dir, exist_ok=True)
    os.makedirs(actions_dir, exist_ok=True)

    for action in actions:

        # Create reducer template
        reducer_anchor_1_template = """// [ANCHOR_1]"""

        reducer_new_bottom_template = """
        case '{action}_{model_name_upper}':
            return {...state, data: []};
        case '{action}_SUCCESS_{model_name_upper}':
            return {...state, data: []};
        case '{action}_FAIL_{model_name_upper}':
            return {...state, error: action.payload.error, data: []};
// [ANCHOR_1]
        """

        # Write the templates to files
        reducer_file_path = os.path.join(reducers_dir, f'{model_name}_reducer.ts')

        existing_content = ""

        # Read the content of the existing file
        with open(reducer_file_path, 'r') as existing_reducer_file:
            existing_content = existing_reducer_file.read()

        existing_content = existing_content.replace(
            reducer_anchor_1_template, reducer_new_bottom_template
        )
        existing_content = existing_content.replace(
            '{action}', action
        )
        existing_content = existing_content.replace(
            '{action_lower}', action.lower()
        )
        existing_content = existing_content.replace(
            '{action_capitalize}', action.capitalize()
        )
        existing_content = existing_content.replace(
            '{model_name}', model_name
        )
        existing_content = existing_content.replace(
            '{model_name_upper}', model_name.upper()
        )
        existing_content = existing_content.replace(
            "{model_name_capitalize}", model_name_capitalize
        )

        with open(reducer_file_path, 'w') as reducer_file:
            reducer_file.write(
                existing_content
            )

        action_anchor_1_template = """// [ANCHOR_1]"""

        action_template = """

export const {action_lower}{model_name_capitalize} = (data: {model_name_capitalize}State) => (dispatch: Dispatch<{model_name_capitalize}ActionTypes>) => {{
    try {
        dispatch({ type: '{action}_{model_name_upper}', payload: data });
        
        dispatch({ type: '{action}_SUCCESS_{model_name_upper}', payload: {...data, error: null, message: "{action}_SUCCESS"} });
    } catch (error) {
        dispatch({ type: '{action}_FAIL_{model_name_upper}', payload: {...data, error: error, message: "{action}_FAIL"} });
    }
}};
// [ANCHOR_1]
        """

        action_file_path = os.path.join(actions_dir, f'{model_name}_action.ts')

        existing_content = ""

        # Read the content of the existing file
        with open(action_file_path, 'r') as existing_reducer_file:
            existing_content = existing_reducer_file.read()

        existing_content = existing_content.replace(
            action_anchor_1_template, action_template
        )
        existing_content = existing_content.replace(
            '{action}', action
        )
        existing_content = existing_content.replace(
            '{action_lower}', action.lower()
        )
        existing_content = existing_content.replace(
            '{action_capitalize}', action.capitalize()
        )
        existing_content = existing_content.replace(
            '{model_name}', model_name
        )
        existing_content = existing_content.replace(
            '{model_name_upper}', model_name.upper()
        )
        existing_content = existing_content.replace(
            "{model_name_capitalize}", model_name_capitalize
        )
        with open(action_file_path, 'w') as action_file:
            action_file.write(
                existing_content
            )

        if not model_name:
            print('Usage: python create types file <model_name>')
            sys.exit(1)

        # Create types template
        types_anchor_1_template = """// [ANCHOR_1]"""
        types_anchor_2_template = """// [ANCHOR_2]"""
        types_anchor_3_template = """// [ANCHOR_3]"""

        types_template_1 = """
export const {action}_{model_name_upper} = '{action}_{model_name_upper}'
export const {action}_SUCCESS_{model_name_upper} = '{action}_SUCCESS_{model_name_upper}'
export const {action}_FAIL_{model_name_upper} = '{action}_FAIL_{model_name_upper}'
// [ANCHOR_1]
        """

        types_template_2 = """

interface {action_capitalize}{model_name_capitalize}Action {
    type: typeof {action}_{model_name_upper};
    payload: {model_name_capitalize}State;
}

interface {action_capitalize}Success{model_name_capitalize}Action {
type: typeof {action}_SUCCESS_{model_name_upper};
payload: {model_name_capitalize}State;
}

interface {action_capitalize}Error{model_name_capitalize}Action {
type: typeof {action}_FAIL_{model_name_upper};
payload: {model_name_capitalize}State;
}
// [ANCHOR_2]
        """

        types_template_3 = """
| {action_capitalize}{model_name_capitalize}Action 
| {action_capitalize}Success{model_name_capitalize}Action 
| {action_capitalize}Error{model_name_capitalize}Action 
// [ANCHOR_3]
        """

        existing_content = ""

        types_file_path = f'{root_dir}/types/{model_name}_types.ts'

        # Read the content of the existing file
        with open(types_file_path, 'r') as existing_types_file:
            existing_content = existing_types_file.read()

        existing_content = existing_content.replace(
            types_anchor_1_template, types_template_1
        )
        existing_content = existing_content.replace(
            types_anchor_2_template, types_template_2
        )
        existing_content = existing_content.replace(
            types_anchor_3_template, types_template_3
        )
        existing_content = existing_content.replace(
            '{action}', action
        )
        existing_content = existing_content.replace(
            '{action_lower}', action.lower()
        )
        existing_content = existing_content.replace(
            '{action_capitalize}', action.capitalize()
        )
        existing_content = existing_content.replace(
            '{model_name}', model_name
        )
        existing_content = existing_content.replace(
            '{model_name_upper}', model_name.upper()
        )
        existing_content = existing_content.replace(
            "{model_name_capitalize}", model_name_capitalize
        )

        with open(types_file_path, 'w') as types_file:
            types_file.write(
                existing_content
            )

        print(f'Types file for "{model_name}" created successfully.')
