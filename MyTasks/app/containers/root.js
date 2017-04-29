import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  TouchableHighlight,
  Text
} from 'react-native';
const TodosActions =  require("../actions/todosActions");
import { bindActionCreators } from 'redux';
import Heading from '../components/Heading';
import Input from '../components/Input';
import Button from '../components/Button';
import TodoList from '../components/TodoList';
import TabBar from '../components/TabBar';
import { AdMobBanner, AdMobInterstitial, PublisherBanner } from 'react-native-admob';
import TimerMixin from 'react-timer-mixin';
import reactMixin from 'react-mixin';

class Root extends Component{
    constructor(props){
        super(props);
        this.submitTodo = this.submitTodo.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.setType = this.setType.bind(this);

        this.state = {
            bannerSize: 'smartBannerPortrait',
        };
        this.setBannerSize = this.setBannerSize.bind(this);
    }

    setType (type) {
        this.props.onSetType(type);
    }

     componentDidMount() {
         
        AdMobInterstitial.setTestDeviceID('EMULATOR');
        AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');

        AdMobInterstitial.addEventListener('interstitialDidLoad',
        () => console.log('interstitialDidLoad event'));
        AdMobInterstitial.addEventListener('interstitialDidClose',
        this.interstitialDidClose);
        AdMobInterstitial.addEventListener('interstitialDidFailToLoad',
        () => console.log('interstitialDidFailToLoad event'));
        AdMobInterstitial.addEventListener('interstitialDidOpen',
        () => console.log('interstitialDidOpen event'));
        AdMobInterstitial.addEventListener('interstitialWillLeaveApplication',
        () => console.log('interstitalWillLeaveApplication event'));

        AdMobInterstitial.requestAd((error) => error && console.log(error));

        /* this ads can be enable in free versions */
        /*
        this.setInterval(
            () => { this.showInterstital(); },
            5000
        );
        */
        
    }

    componentWillUnmount() {
        AdMobInterstitial.removeAllListeners();
    }

    interstitialDidClose() {
        console.log('interstitialDidClose event');
        AdMobInterstitial.requestAd((error) => error && console.log(error));
    }

    showInterstital() {
        AdMobInterstitial.showAd((error) => error && console.log(error));
    }

    setBannerSize() {
        const { bannerSize } = this.state;
        this.setState({
        bannerSize: bannerSize === 'smartBannerPortrait' ?
            'mediumRectangle' : 'smartBannerPortrait',
        });
    }

    render(){
        const { todos } = this.props;
        const { bannerSize } = this.state;
        
        const {inputVal, todos : todosList, taskStatus : type } = todos;
        return(   
                <View style={styles.container}>
                    <ScrollView style={styles.content} keyboardShouldPersistTaps="handled">
                        <Heading />
                        <Input
                            inputValue={inputVal}
                            inputChange={this.inputChange}
                        /> 
                        <TodoList 
                            todos={todosList}  
                            toggleComplete={this.toggleComplete}
                            deleteTodo={this.deleteTask}
                            type={type}
                        />
                        <Button submitTodo={this.submitTodo} />
                        {/*
                        <TouchableHighlight>
                            <Text onPress={this.showInterstital} style={styles.button}>
                            Show interstital and preload next
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <Text onPress={this.setBannerSize} style={styles.button}>
                            Set banner size to {bannerSize === 'smartBannerPortrait' ?
                                'mediumRectangle' : 'smartBannerPortrait'}
                            </Text>
                        </TouchableHighlight>
                        */}
                       

                    </ScrollView>
                    <TabBar type={type} setType={this.setType} />
                </View>
        );
    }
    submitTodo = () => {
        if(this.props.todos.inputValue.match(/^\s*$/)){
            return;
        }
        let todo = {
            "Task": this.props.todos.inputValue,
            "Complete": false,
            "taskType": "General",
             "TaskId": -1 // will be updated in tthe action method
        }

        this.props.onSubmitClick(todo);
    }

    deleteTask = (taskId) => {
        const { todos : todosList } = this.props.todos;
        const currentTodo = todosList.filter((td) => td.TaskId===taskId);
        if(currentTodo && currentTodo.length ===1){
            this.props.onDeleteTask(currentTodo[0]);
        }
    }

    toggleComplete = (taskId) => {
        const { todos : todosList } = this.props.todos;
        const currentTodo = todosList.filter((td) => td.TaskId===taskId);
        if(currentTodo && currentTodo.length ===1){
            this.props.onTaskChanged({TaskId: currentTodo[0].TaskId , Complete:!currentTodo[0].Complete});
        }
    }

    inputChange(nv){
        this.props.onTitleChanged(nv);
    }
}

reactMixin(Root.prototype, TimerMixin);

Root.propTypes = {
    todos: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex :1,
        backgroundColor: "#f5f5f5"
    },
    content :{
        flex: 1,
        paddingTop: 60
    }
});



const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        //actions: bindActionCreators(TodosActions, dispatch) -- can use this when you want to pass these dispatch methods to component that does not know about redux
        onSubmitClick: (todo) => {
            dispatch(TodosActions.addTodos(todo));
        },
        onTitleChanged:  (newVal) =>{
            dispatch(TodosActions.titleChanged(newVal));
        },
        onTaskChanged: (todo) => {
            dispatch(TodosActions.editTodos(todo));
        },
        onDeleteTask: (todo) => {
            dispatch(TodosActions.deleteTodos(todo));
        },
        onSetType: (type) =>{
            dispatch(TodosActions.todoTypeChanged(type));
        }
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);