import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";

import Input from "../components/Input";
import COLORS from "../const/Colors";
import CheckBox from "../components/CheckBox";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const fundo = "../assets/fundo.png";

const Login = () => {
  const optionsindividual = [{text:'Lembrar-me', id: 1}];
    return(
    
    <Layout>
      <Text style={estilos.Text}>Entrar</Text>
      <View style={estilos.Text}>
        <Text style={estilos.title}></Text>
        <Input placeholder=" CPF"/>
      </View>
      
      <Text style={estilos.title}></Text>
      <Input style={estilos.eye}placeholder="Senha" iconName="eye" />

      <View>
        
        <CheckBox options={optionsindividual} onChange={op=> alert (op)} />
        <TouchableOpacity style={estilos.button2}>
          <Text style={estilos.texto}>Esqueceu a senha?</Text>
        </TouchableOpacity>

      </View>

      <View style={estilos.Button01}>
        <Button style={estilos.Button01}title="Entre" />
      </View>

      <Text style={estilos.Texto}>Novo por aqui? </Text>
      <TouchableOpacity style={estilos.buttonRegister}>
        <Text style={estilos.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
    </Layout>
  );
}

const estilos = StyleSheet.create({
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },
  container: {
    flex: 1,
  },
  imagemFundo: {
    justifyContent: "flex-end",
    flex: 1,
  },
  containerForm: {
    backgroundColor: "#FFF",
    paddingBottom: 200,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 5,
    marginTop: 30,
  },
  Button01: {
    left:100,
    top:-160,
  },
  
  buttonText: {
    display: "flex",
    justifyContent: "center",
    color: COLORS.vermelhoPrincipal,
    fontSize: 15,
    fontWeight: "bold",
    top:-195,
    left:45

  },
  buttonRegister: {
    alignItems: "center",
  },
  registerText: {
    color: "#ffff",
  },
  Text: {
    textAlign: "center",
    justifyContent: "center",
    color: COLORS.vermelhoPrincipal,
    fontSize: 18,
    fontWeight: "bold",
    top: 20,
    marginBottom: 10,
  },
  button2: {
    color:COLORS.vermelhoPrincipal,
    marginBottom:100,
    left:220,
  },
  
  texto:{
    color:COLORS.vermelhoPrincipal,
    fontWeight: "bold",
    top:-120
  },
    eye:{
      
    },
    Texto:{
      top:-175,
      left:90,
      fontSize: 15,
   },
   CheckBox:{
     
   }
  
});

export default Login