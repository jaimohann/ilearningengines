import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { library } from '@fortawesome/fontawesome-svg-core'

import {  faFacebookF } from '@fortawesome/free-brands-svg-icons'

import {  faTachometerAlt,faAngleLeft,faCogs,faExclamationTriangle,faUsers,
  faShoppingCart,faTh,faChartPie,faLaptop,faTable,
  faEnvelope as faEnvelopeSolid,faFolder,faShare,faBars
  ,faChalkboardTeacher,faUserGraduate,faBook,faCog,faSearch } from '@fortawesome/free-solid-svg-icons'

import { faEnvelope,faFlag,faBell,faClock,faUser, 
      faCircle,  faCopy,faFile,faEdit,faCalendar } from '@fortawesome/free-regular-svg-icons'

import LayoutConfig from '../src/Config/Layout.json';
import {BrowserRouter} from 'react-router-dom'


    
library.add(
  faFlag,faEnvelope,faBell,faCogs,faClock,faUser,
  faExclamationTriangle,faUsers,faShoppingCart,
  faTachometerAlt,faCircle,faAngleLeft,faCopy,faFile,faTh,faChartPie,
  faLaptop,faEdit,faTable,faEnvelopeSolid,faCalendar,
  faFolder,faShare,faBars,faChalkboardTeacher,faUserGraduate,faBook,faCog,faSearch,faFacebookF)


class App extends Component {

  layoutConfig = LayoutConfig;

  render() {
    return (
      <BrowserRouter>
      <Layout config = {this.layoutConfig} >

      </Layout> 
      </BrowserRouter>
    );
  }
}

export default App;
