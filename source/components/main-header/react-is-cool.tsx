import * as React from 'react'

export const MainHeader = (props: any) => (
  <div className="main-header">
      <div className="inner" >
          <div className="logo" ></div>
          <div className="navigation">
              <span className="main-header-tab">Home</span>
              <span className="main-header-tab">Products</span>
          </div>
          <strong>{props.headerText}</strong>
      </div>
  </div>
)
