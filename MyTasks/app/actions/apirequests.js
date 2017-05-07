import axios from 'axios';


export function AddTodo(todo)
{
    debugger;
    /*
    return axios.post('https://mytasks-2df8e.firebaseio.com/tasks.json', todo)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
    */

    return axios({
    method: 'post',
    url: 'https://mytasks-2df8e.firebaseio.com/tasks.json',
    data: todo,
    params: {
        //auth: AccessStore.getToken(),
    },
    headers : {
        'Accept': 'application/json',
        //'Authorization': 'Bearer ' + this.authToken,
        'Content-Type': 'application/json'
    }
    }).then(function (response) {
        console.log(response); // if needed - store response.data.name which is firebase key into the obejct
    })
    .catch(function (error) {
        console.log(error);
    });

}

function deleteFirebaseTask(fbTask)
{
    debugger;
    axios.delete('https://mytasks-2df8e.firebaseio.com/tasks.json', fbTask)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

}

export function DeleteTodo(todo)
{
    return axios.get(`https://mytasks-2df8e.firebaseio.com/tasks.json?orderBy=%22TaskId%22&equalTo=${todo.TaskId}`)
        .then(deleteFirebaseTask);
}

