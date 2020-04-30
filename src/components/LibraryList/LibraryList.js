import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';


const LibraryList = ({ libraryList }) => {
    return (
        <FlatList
            keyExtractor={(element)=> element.id+'_libraryList'}
            data={libraryList}
            renderItem={(item) => <ListItem data={item} />}
        />
    );
}

const mapStateToProps = state => ({
    libraryList: state.libraries
})

export default connect(mapStateToProps)(LibraryList);