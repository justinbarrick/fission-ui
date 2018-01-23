/**
*
* EnvironmentsListItem
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import commonMessages from 'messages';

function Item({ item, onRemove }) {
  return (
    <tr>
      <td>{ item.metadata.name }</td>
      <td>{ item.spec.runtime.image }</td>
      <td>
        <Link to={`/environments/edit/${item.metadata.name}`} className="btn btn-primary"><FormattedMessage {...commonMessages.edit} /></Link>{ ' ' }
        <a onClick={onRemove} className="btn btn-danger"><FormattedMessage {...commonMessages.delete} /></a>
      </td>
    </tr>
  );
}

Item.propTypes = {
  item: React.PropTypes.object,
  onRemove: React.PropTypes.func,
};

export default Item;
