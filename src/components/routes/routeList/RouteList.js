import React from "react";
import RouteSummary from "./../routeSummary/RouteSummary";
import './RouteList.css'

const RouteList = React.memo((props) => {

  const {routes} = props
  const {onClick} = props
  const {currentMap} = props

  const summaries = routes.map((route) => {
    return (currentMap) ? <RouteSummary key={route.id} id={route.id === currentMap.id ? 'active' : ''} onClickHandle={onClick} route={route}></RouteSummary>
    : <RouteSummary key={route.id} onClickHandle={onClick} route={route}></RouteSummary>
  });
  return (
    <div id="routeList">
      {summaries}
    </div>
    
  );
})

export default RouteList