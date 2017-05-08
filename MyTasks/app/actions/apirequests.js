import axios from 'axios';


export function AddTodo(todo)
{
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
    
    return new Promise( function(resolve, reject){
        axios.get(`https://mytasks-2df8e.firebaseio.com/tasks.json?orderBy=%22TaskId%22&equalTo=${fbTask.TaskId}`)
        .then( function(entityToDelete){
            if(!entityToDelete || ! entityToDelete.data || Object.keys(entityToDelete.data).length !== 1)
            {
                debugger;
                return "No entity found to delete.";
            }
            debugger;
            var objToDel = Object.keys(entityToDelete.data)[0];
            return axios.delete(`https://mytasks-2df8e.firebaseio.com/tasks/${objToDel}.json/` );
        })
        .then(function (response) {
            debugger;
            console.log(response);
            resolve(response);
        })
        .catch(function (error) {
            debugger;
            console.log(error);
            reject(response);
        });
    });

}

export function DeleteTodo(todo)
{
    return deleteFirebaseTask(todo).then( (resp) => console.log(resp), (resp1) => console.log(resp1));
    //return axios.get(`https://mytasks-2df8e.firebaseio.com/tasks.json?orderBy=%22TaskId%22&equalTo=${todo.TaskId}`)
        //.then(deleteFirebaseTask);
}

