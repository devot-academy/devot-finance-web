'use client'

import React from 'react';
import CreateAccountTemplate from '../../components/templates/createAccount';
import * as API from '../../api/create-user';

export default function CreateAccount() {

  // API (Expecificar os endpoint) APICreateUser(dataUse)
                //  POST (http://localhost:3000/user, dataUse)
  // Ferramenta de comunicação (Axios ou Fetch)
  return <CreateAccountTemplate onSubscribe={API.createUser}/>;
}