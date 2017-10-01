import React from 'react';
import {View, Text} from 'react-native'
import PropTypes from 'prop-types';
import styles from './Card.styles';

export const Card = (props) => {

    const labels = {
        11: 'J',
        12: 'Q',
        13: 'K',
        14: 'A'
    };

    const label = labels[props.value] || props.value;

    return (
        <View style={styles.card}>
            <View>
              <Text style={styles.label}>{label}</Text>
            </View>
        </View>
    )
};

Card.propTypes = {
    value: PropTypes.string.isRequired
};