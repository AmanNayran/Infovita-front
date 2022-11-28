import React from 'react';
import {BrowserRouter} from 'react-router-dom';

//Rotas
import RotasAdm from './rotas/rotas';

//Auth
import { AuthProvider } from './contexts/auth';

//Componentes
import BarraNav from './componentes-adm/nav/nav';
import Footer from './componentes-adm/footer/footer';


export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <BarraNav/>

        <RotasAdm/>

        <Footer/>

      </BrowserRouter>
    </AuthProvider>
  );
};