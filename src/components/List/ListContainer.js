import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList, createActionAddColumn} from '../../redux/ColumnRedux';



const mapStateToProps = (state, props) => {
  const id = props.match.params.id; //atrybut funkcji getColumnsForList:
  const filteredLists = state.lists.filter(list => list.id === id); //przefiltrujemy stan aplikacji. - chcemy aby ten obiekt zawierał również wszystkie inne właściwości tej listy, takie jak np. title. Aby je wydostać ze stanu aplikacji, musimy przefiltrować tablicę lists, wybrać listę o tym samym id, a następnie wykorzystać jej właściwości.
  const listParams = filteredLists[0] || {}; // przefiltrowana lista powinna z jednym elem. – jest to obiekt zawierający właściwości listy. Możemy więc zapisać go w nowej stałej listParams, a na wypadek, gdyby w stanie aplikacji nie było listy o id z adresu strony, dodamy || {}, czyli "lub użyj pustej tablicy", aby nie spotkać się z błędem.

  return {
    ...listParams, // rozpakowujemy zawartość listParams do zwracanego obiektu, aby właściwości takie jak title czy description zostały przekazane do komponentu List jako propsy.
    columns: getColumnsForList(state, id),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.match.params.id, // nie rozumiem
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);