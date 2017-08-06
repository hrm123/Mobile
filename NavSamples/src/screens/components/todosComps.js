import React,{Component} from 'react';
import { 
    View, Text, TextInput, StyleSheet,
     TouchableHighlight } from 'react-native';
import styles from '../../styles/todosStyles'

export class Button extends Component{
    constructor(props){
        super(props);
    };
    render = () => {
        return(
            <View style={styles.buttonContainer} >
            <TouchableHighlight
                underlayColor='#efefef'
                style={styles.button}
                onPress={this.submitClicked}
            >
                <Text style={styles.submit}>
                    Submit
                </Text>
            </TouchableHighlight>
        </View>
        );
    };
    submitClicked = () => {
        const { submitTodo } = this.props;
        if(submitTodo){
            submitTodo();
        }
    };
};

export class ButtonWidget extends Component {

  render(){
    return (
      <View>
        <TouchableHighlight underlayColor={"#E8E8E8"} onPress={this.props.onpress} style={this.props.button_styles}>
          <View>
              <Text style={this.props.button_text_styles}>{this.props.text}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
};

export class Input extends Component{
    constructor(props){
        super(props);
        this.state = {text : ''};
        this.onInputValChanged = this.onInputValChanged.bind(this);
    }

    render(){
        const { inputValue, inputChange } = this.props;
        return(
            <View style={styles.inputContainer}>
                <TextInput
                    value={this.state.text}
                    style={styles.input}
                    placeholder="What needs to be done?"
                    placeholderTextcolor="#CACACA"
                    selectionColor="#666666"
                    onChangeText={ (text) => this.setState({text})} 
                    onBlur={this.onInputValChanged}/>
            </View>
        );
    };

    onInputValChanged(evnt){
        this.props.inputChange(this.state.text);
    };
};

export const Todo = ({ todo, toggleComplete, deleteTodo  }) => (
    <View style={styles.todoContainer}>
        <Text style={styles.todoText}>
            {todo.Task}
        </Text>
        <View style={styles.buttons}>
            <TodoButton
                name='Done'
                complete={todo.Complete}
                onPress={() =>toggleComplete(todo.TaskId)} 
            />
            <TodoButton
                name='Delete'
                onPress={() =>deleteTodo(todo.TaskId)}
            />
        </View>
    </View>
);

export const TodoButton = ({ onPress, complete, name }) =>{
    return (
        <TouchableHighlight
            onPress={onPress}
            underlayColor='#efefef'
            style={styles.todobutton}
        >
            <Text style={[
                styles.text,
                complete ? styles.complete : null,
                name === 'Delete' ? styles.deleteButton : null ]}
            >
                {name}
            </Text>
        </TouchableHighlight>
    );
};

export const TodoList = ({todos, toggleComplete, deleteTodo , type}) => {

    const getVisibleTodos = (todos, type) => {
        switch (type) {
            case 'All':
                return todos;
            case 'Complete':
                return todos.filter( (t) => t.Complete);
            case 'Active':
                return todos.filter( (t) => !t.Complete);
        }
    }

    todos = getVisibleTodos(todos, type).map((todo, i) => {
        return (
            <Todo
                key={todo.TaskId}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
            />
        )
    });
    return (
        <View>
            {todos}
        </View>
    );
};

export const TabBarItem = ({ border, title, selected, setType, type }) => (
    <TouchableHighlight
        underlayColor='#efefef'
        onPress={setType}
        style={[
        styles.item, selected ? styles.selected : null,
        border ? styles.border : null,
        type === title ? styles.selected : null ]}
    >
        <Text style={[ styles.itemText, type === title ? styles.bold : null ]}>
            {title}
        </Text>
    </TouchableHighlight>
);


export const TabBar = ({ setType, type }) => (
    <View style={styles.tabbarcontainer}>
        <TabBarItem type={type} title='All'
        setType={() => setType('All')} />
        <TabBarItem type={type} title='Active'
        setType={() => setType('Active')} />
        <TabBarItem type={type} title='Complete'
        setType={() => setType('Complete')} />
    </View>
);