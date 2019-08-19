import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';
//el import de arriba significa, importame
//todo lo de ese archivo, y asignamelo a esa variable, en este caso actions

class ListItem extends Component {
    
    componentWillUpdate() {
        LayoutAnimation.spring();
    }
    
    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>{library.item.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library.item;

        //console.log(this.props);
        //el curso decia que el text contiene
        //{this.props.library.title}
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

//si quiero que un componente consuma el state a nivel aplicacion,
//tengo que agregar el mapStateToProps y el connect handler de redux
//el nombre de la property "state.selectedLibraryId" esporque en el index de los reducers
// yo declare que ese era el nombre
const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id;

    return { expanded: expanded }
};

//el primer argumento siempre es mapStateToProps, si no lo uso
//paso null
export default connect(mapStateToProps, actions)(ListItem);
