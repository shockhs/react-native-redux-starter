import React, { useCallback, useEffect } from 'react';
import { LayoutAnimation, Platform, StyleSheet, Text, TouchableWithoutFeedback, UIManager, View } from 'react-native';
import { connect } from 'react-redux';
import { selectElement } from '../../reducers/actions/actions';

const ListItem = ({ data, selectElement, expanded }) => {
    const { id, title, description } = data.item;
    useEffect(() => {
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }, [])
    const handlePress = useCallback(() => {
        LayoutAnimation.linear();
        selectElement(id);
    }, [id])
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View>
                <View
                    style={[styles.containerView, (expanded ? null : styles.containerDisableView)]}>
                    <Text style={{ color: '#000' }}>{title}</Text>
                </View>
                {expanded
                    ? <View style={styles.subTextView}>
                        <Text>
                            {description}
                        </Text>
                    </View>
                    : null}
            </View>
        </TouchableWithoutFeedback >
    );
}

const styles = StyleSheet.create({
    containerView: {
        height: 30,
        marginTop: 10,
        marginHorizontal: 10,
        borderColor: '#007aff',
        paddingLeft: 15,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderWidth: 1,
        justifyContent: 'center'
    },
    containerDisableView: {
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    subTextView: {
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#007aff',
        textAlign:'justify',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    }
})


const mapStateToProps = (state, ownProps) => {
    const expanded = ownProps.data.item.id === state.selection
    return { expanded }
}

export default connect(mapStateToProps, { selectElement })(ListItem);