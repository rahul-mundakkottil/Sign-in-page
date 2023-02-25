



import React,{Component} from 'react'
import{
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight


}from 'react-native'

class FlexContend extends Component{
render(){
 return(
    <View>
        <Text style={{ color:'white',fontSize:20}}> Hi My Name Is {this.props.name}</Text>
    </View>

 )
}
}
export default class Homepage extends Component{
constructor(){
    super();
    this.state={
        main_text:'RAHUL',
        sub_text:'M.M',
        name:'babu'
    
    }
}
componentDidCatch(){
    console.log(this.props.route.params.username)
}
updatetext(){
    this.setState({
        main_text:'WELCOME TO',
         sub_text:'REACT-NATIVE'  
    })
 }
 
 
render(){
    return(
        <View style={styles.viewstyle}>
           <Text style={{marginRight:244,color:'#222021',fontSize:15,fontWeight:'bold',marginBottom:5,marginTop:20}}>Enter username</Text>
           
            <TextInput style={styles.textinput}  
        maxLength={10}
       
        onChangeText={(username)=> this.setState({name:username})}
        ></TextInput>
        <Text style={{marginRight:280,color:'black',fontSize:15,fontWeight:'bold',marginBottom:5}}>password</Text>
         
         <TextInput style={styles.textinput}  
        maxLength={10}
        secureTextEntry={true}
        onChangeText={(username)=> this.setState({name:username})}
        ></TextInput>
           <TouchableHighlight style={styles.th1}  underlayColor="white"  onPress={()=> this.props.navigation.navigate('Drawer')}>  
   
            <Text style={styles.text4}>Sign up</Text>
           </TouchableHighlight>
          

        </View>



    )
}
}
  
const styles=StyleSheet.create({
    viewstyle:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
       
        flexDirection:'column'

    } ,
    text1:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        marginBottom:100
    },
    text2:{
        fontSize:15,
        fontWeight:'bold',
        color:'white',
        marginTop:12,
        marginLeft:5,
        marginRight:5
    },
    
    textinput:{
      
        height:40,
        width:'90%',
        borderColor:'white',
        borderWidth:1,
        paddingLeft:40,
        marginBottom:5,
        backgroundColor:'#EBECF0',
        borderRadius:10
       

    },
    th1:{
        backgroundColor:'red',
        height:40,
        width:'90%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        marginTop:10,
        marginBottom:30,
        underlayColor:'white',
        borderWidth:0

    },
    th2:{
        backgroundColor:'blue',
        height:40,
        width:'32%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:0,
        marginTop:10,
        underlayColor:'white',
        borderWidth:2

    },
    th3:{
        backgroundColor:'red',
        height:40,
        width:'32%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:0,
        marginTop:10,
        underlayColor:'white',
        borderWidth:1

    },

    text4:{
        fontSize:15,
        fontWeight:'bold',
        color:'white'
    },


})