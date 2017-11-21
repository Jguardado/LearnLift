import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

const exercises = [{ exercise: 'bench', reps: 4 }, { exercise: 'deadlift', reps: 5 }, { exercise: 'squat', reps: 3 }];

class Workouts extends Component {
  showExercise(move) {
    this.props.navigation.navigate('Movements', { ...move });
  }

  render() {
    return (
      <ScrollView>
        <List>
          {exercises.map(move => (
            <ListItem
              key={move.exercise}
              title={move.exercise}
              onPress={() => this.showExercise(move)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default Workouts;
