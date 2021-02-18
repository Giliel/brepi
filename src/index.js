import React from 'react';
import ReactDOM from 'react-dom';
import Beer from './Beer';

ReactDOM.render(
  <div>
    <Beer name='AB:12' image_url='https://images.punkapi.com/v2/7.png' description='An Imperial Black Belgian Ale aged in old Invergordon Scotch whisky barrels with mountains of raspberries, tayberries and blackberries in each cask. Decadent but light and dry, this beer would make a fantastic base for ageing on pretty much any dark fruit - we used raspberries, tayberries and blackberries beause they were local.' />
  </div>,
  document.getElementById('root')
);
