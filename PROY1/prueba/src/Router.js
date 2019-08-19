import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Iniciar Sesión" />
                </Scene>
                <Scene key="main" >
                    <Scene
                        rightTitle="Agregar"
                        onRight={() => Actions.employeeCreate()}
                        key="employeeList"
                        component={EmployeeList}
                        title="Empleados"
                        initial
                    />
                    <Scene key="employeeCreate" component={EmployeeCreate} title="Crear empleado" />
                    <Scene key="employeeEdit" component={EmployeeEdit} title="Editar empleado" />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
