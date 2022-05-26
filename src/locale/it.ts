export default {
  session: {
    expired: {
      title: 'Sessione scaduta',
      message: 'Stai per essere rediretto alla pagina di login...',
    },
  },
  userPagesPath: {
    detailRedirect: 'Utenti',
    addUser: 'Aggiungi nuovo utente',
    editUser: 'Modifica il profilo utente',
  },
  usersTable: {
    filterRole: {
      placeholder: 'Tutti i ruoli',
      admin: {
        title: 'Amministratore',
        description: 'tutti i ruoli abilitati alla gestione dei prodotti e di Self Care',
      },
      limited: {
        title: 'Operatore',
        description: 'tutti i ruoli ruoli autorizzati a operare sui prodotti',
      },
      addFiltersButton: 'Filtra',
      deleteFiltersButton: 'Cancella filtri',
      noDataFilter:
        'I filtri che hai applicato non hanno dato nessun risultato. <1><2>Rimuovi filtri</2></1>.',
      errorOnFetch: 'Spiacenti, qualcosa è andato storto. <1><2>Riprova</2></1>.',
    },
    rowActions: {
      toolTipActions: 'Seleziona il tipo di azione',
      toolTipInfo: 'Le azioni sono disponibili nel dettaglio del referente',
      edit: 'Modifica',
      rehabilitate: 'Riabilita',
      suspend: 'Sospendi',
      delete: 'Elimina',
      deleteModal: {
        title: 'Elimina Referente',
        message: `Stai per eliminare `,
        confirmButton: 'Conferma',
        closeButton: 'Annulla',
      },
      deleteSuccess: 'Utente rimosso correttamente',
      changeUserStatusModal: {
        titleSuspended: 'Sospendi Referente',
        titleReactivate: 'Riabilita Referente',
        messageSuspended: 'Stai per sospendere ',
        messageReactivate: 'Stai per riabilitare ',
        message: ` <0>{{user}}</0>.<4/>Vuoi continuare?`,
        confirmButton: 'Conferma',
        closeButton: 'Annulla',
      },
      wantContinue: 'Vuoi continuare?',
      changeUserStatusSuccess: 'Utente {{userStatus}} correttamente',
    },
    loadMore: 'Carica altri',
    addButton: 'Aggiungi',
  },
  userDetail: {
    title: 'Profilo Utente',
    name: 'NOME',
    surname: 'COGNOME',
    fiscalCode: 'CODICE FISCALE',
    institutionalEmail: 'EMAIL ISTITUZIONALE',
    institution: 'ENTE',
    editButton: 'Modifica',
    deleteButton: 'Elimina',
    deleteUserButton: 'Elimina utente',
    backButton: 'Indietro',
    actions: {
      delete: {
        userRoleDelete: 'Ruolo rimosso correttamente',
        userDelete: 'Utente rimosso correttamente',
        userDeleteError: "Non è stato possibile rimuovere l'utente. Riprova.",
      },
      modalDelete: {
        moreRolesOnProduct: {
          title: 'Rimuovi Ruolo',
          message:
            'Vuoi rimuovere <1>{{user}}</1> dal ruolo di <3>{{role}}</3>? <6 />Puoi assegnare di nuovo il ruolo in qualsiasi momento.',
        },
        oneRoleOnProduct: {
          title: 'Elimina Utente',
          message: 'Stai per eliminare <1>{{user}}</1>.<3 />Vuoi continuare?',
        },
        haveMoreProducts:
          'Stai per rimuovere <2>{{user}}</2> dal ruolo di <4>{{productRole}}</4>. <5 />Se lo rimuovi, non potrà più operare su <7>{{productTitle}}</7>. <9 />Puoi assegnare di nuovo il ruolo in qualsiasi momento.',
        removeRoleButton: 'Rimuovi',
        closeButton: 'Annulla',
      },
      changeUserStatusModal: {
        suspend: {
          title: 'Sospendi ruolo',
          messageWithOneRole:
            'Vuoi sospendere <1>{{user}}</1> dal ruolo di <3>{{productRole}}</3>?<4 />Se lo sospendi, non potrà più operare su <6>{{productTitle}}</6>. Puoi riabilitarlo in qualsiasi momento.',
          messageWithMultipleRoles:
            'Vuoi sospendere <1>{{user}}</1> dal ruolo di <3>{{productRole}}</3>?<4 />Puoi riabilitarlo in qualsiasi momento.',
        },
        reactivate: {
          title: 'Riabilita ruolo',
          messageWithOneRole:
            'Vuoi riabilitare <1>{{user}}</1> dal ruolo di <3>{{productRole}}</3>?<4 />Se lo riabiliti, potrà operare di nuovo su <6>{{productTitle}}</6>.<8 /> Puoi sospenderlo di nuovo in qualsiasi momento.',
          messageWithMultipleRoles:
            'Vuoi riabilitare <1>{{user}}</1> dal ruolo di <3>{{productRole}}</3>?<4 />Puoi sospenderlo di nuovo in qualsiasi momento.',
        },
        confirmButton: 'Conferma',
        closeButton: 'Annulla',
      },
      changeUserStatusSuccess: 'Ruolo {{userStatus}} correttamente',
      changeUserStatusSuspendError: 'Non è stato possibile sospendere il ruolo. Riprova.',
      changeUserStatusRehabilitateError: 'Non è stato possibile riabilitare il ruolo. Riprova.',
      changeUserStatusRemoveError: 'Non è stato possibile rimuovere il ruolo. Riprova.',
      suspendRole: 'Sospendi',
      reactivateRole: 'Riabilita',
      deleteButton: 'Rimuovi',
      successfulAddRole: 'Ruolo assegnato correttamente',
      addRoleError: 'Non è stato possibile assegnare il ruolo. Riprova.',
      newRoleAssign: '+ Assegna un altro ruolo',
      newRoleAssignModal: {
        title: 'Assegna ruolo',
        message:
          'Assegna a <1>{{user}}</1> un altro ruolo <3>{{userRole}}</3> sul prodotto <5>{{productTitle}}</5>',
        confirmButton: 'Conferma',
        closeButton: 'Annulla',
      },
      deleteUserModal: {
        title: 'Elimina utente',
        message: 'Stai per eliminare <1>{{user}}</1>.<3 />Vuoi continuare?',
        confirmButton: 'Conferma',
        closeButton: 'Annulla',
      },
    },
    productSection: {
      title: 'Ruoli',
      description: 'Qui trovi tutti i dati dei prodotti relativi al tuo profilo',
      addButton: 'Assegna ruolo',
    },
    pathDescription: 'Utenti',
    selfCareRole: 'RUOLO SU SELF CARE',
    suspended: 'sospeso',
    rehabilitated: 'riabilitato',
    group: 'GRUPPO',
    role: 'RUOLO',
    statusLabel: 'Sospeso',
  },
  userEdit: {
    addForm: {
      title: 'Aggiungi un nuovo utente',
      subTitle: 'Inserisci i dati dell’utente, seleziona un prodotto e assegnagli un ruolo.',
      fiscalCode: {
        label: 'Codice Fiscale',
        placeholder: "Inserisci il Codice Fiscale dell'utente",
      },
      name: {
        label: 'Nome',
        placeholder: "Inserisci il nome dell'utente",
      },
      surname: {
        label: 'Cognome',
        placeholder: "Inserisci il cognome dell'utente",
      },
      institutionalEmail: {
        label: 'Email istituzionale',
        placeholder: "Inserisci l’indirizzo email istituzionale dell'utente",
      },
      confirmInstitutionalEmail: {
        label: 'Conferma email',
        placeholder: "Conferma l’indirizzo email istituzionale dell'utente",
      },
      product: {
        title: 'Seleziona il prodotto',
      },
      role: {
        title: 'Seleziona il ruolo che vuoi assegnare all’utente',
      },
      backButton: 'Indietro',
      confirmButton: 'Conferma',
      errors: {
        invalidFiscalCode: 'Il Codice Fiscale inserito non è valido ',
        invalidEmail: 'L’indirizzo email non è valido',
        mismatchEmail: 'Gli indirizzi email non corrispondono',
      },
      saveUserSuccess: 'Utente aggiunto correttamente',
      saveUserError: "Non è stato possibile aggiungere l'utente. Riprova.",
      addMultiRoleModal: {
        title: 'Assegna ruolo',
        message:
          'Stai per assegnare a <1>{{user}}</1> i ruoli <3>{{roles}}</3> sul prodotto <5>{{productTitle}}</5><6><7></7><8></8></6>Confermi di voler continuare?<9></9>',
        confirmButton: 'Conferma',
        closeButton: 'Annulla',
      },
    },
    editRegistryForm: {
      title: 'Modifica il profilo utente',
      fiscalCode: {
        label: 'Codice Fiscale',
        placeholder: "Inserisci il Codice Fiscale dell'utente",
      },
      name: {
        label: 'Nome',
        placeholder: "Inserisci il nome dell'utente",
      },
      surname: {
        label: 'Cognome',
        placeholder: "Inserisci il cognome dell'utente",
      },
      institutionalEmail: {
        label: 'Email istituzionale',
        placeholder: "Inserisci l’indirizzo email istituzionale dell'utente",
      },
      confirmInstitutionalEmail: {
        label: 'Conferma email',
        placeholder: "Conferma l’indirizzo email istituzionale dell'utente",
      },
      backButton: 'Indietro',
      confirmButton: 'Conferma',
      errors: {
        userNotFind: "Impossibile individuare l'utente desiderato",
        invalidEmail: 'L’indirizzo email non è valido',
        mismatchEmail: 'Gli indirizzi email non corrispondono',
      },
      editUserSuccess: 'Profilo modificato correttamente',
      editUserError: 'Si è verificato un errore durante la modifica del profilo. Riprova.',
    },
    addProduct: {
      title: 'Assegna un nuovo ruolo',
      subTitle: "Seleziona il prodotto e il ruolo che vuoi assegnare all'utente.",
      name: 'NOME',
      surname: 'COGNOME',
      fiscalCode: 'CODICE FISCALE',
    },
  },
  usersPage: {
    title: 'Utenti',
    generic: {
      subTitle:
        'Visualizza e gestisci i ruoli assegnati agli utenti per i prodotti a cui l’ente ha aderito.',
    },
    vertical: {
      subTitle:
        'Gestisci i Referenti Amministrativi e Operativi abilitati alla gestione del prodotto {{selectedProduct}}',
    },
  },
};
