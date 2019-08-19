import React from 'react';
import firebase from 'firebase';
import { Card, CardSection, Button } from './';

const LogOut = () => {
    return (
        <Card>
            <CardSection>
                <Button whenPressed={() => firebase.auth().signOut()}>
                    Salir
                </Button>
            </CardSection>
        </Card>
    );
};
/*
            <Card>
                <CardSection>
                    <Button whenPressed={() => firebase.auth().signOut()}>
                        Salir
                    </Button>
                </CardSection>
            </Card>


                    <View>
            <Text>
                Texto salir
            </Text>
        </View>
*/

export { LogOut };
