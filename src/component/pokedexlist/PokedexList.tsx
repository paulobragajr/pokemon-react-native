import React from 'react';
import {FlatList} from 'react-native';
import {
  PokedexListBody,
  PokedexEmptyListBody,
  PokedexEmptyText,
  styles,
  PokedexEmptyImage,
} from './PokedexListStyle';

const PokedexList = (props: {
  data: any[];
  renderItem: any;
  numColumns: any;
}) => {
  const {data, renderItem, numColumns} = props;

  const listRender = () => {
    if (data && data.length > 0) {
      return (
        <FlatList
          style={styles.list}
          numColumns={numColumns}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id.toString()}
        />
      );
    } else {
      return (
        <PokedexEmptyListBody>
          <PokedexEmptyImage />
          <PokedexEmptyText>Lista esta vazia</PokedexEmptyText>
        </PokedexEmptyListBody>
      );
    }
  };

  return <PokedexListBody>{listRender()}</PokedexListBody>;
};

export default PokedexList;
