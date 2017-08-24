import * as React from 'react'

interface MainHeaderProps {
  headerText?: any
}

export const MainHeader = (props: MainHeaderProps) => (
  <div className="main-header">
      <div className="inner" >
          <div className="logo" ></div>
          <div className="navigation">
              <span className="main-header-tab" ui-sref="home">Home</span>
              <span className="main-header-tab" ui-sref="products" >Products</span>
          </div>
          <strong>{props.headerText}</strong>
      </div>
  </div>
)
