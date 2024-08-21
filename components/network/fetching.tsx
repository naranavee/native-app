import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Todo[]>([]);

  const getTodos = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <Text>
              {item.title} - {item.completed ? 'Completed' : 'Not Completed'}
            </Text>
          )}
        />
      )}
    </View>
  );
};

export default App;
