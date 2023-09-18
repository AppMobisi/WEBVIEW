import {GridColDef} from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { 
      field: 'id', 
      headerName: 'E-mail', 
      flex: 1 
    },
    {
      field: 'name',
      headerName: 'Nome',
      flex: 1,
      editable: false,
    },
    {
      field: 'class',
      headerName: 'Turma',
      flex: 1,
      editable: false,
    },
    {
      field: 'group',
      headerName: 'Grupo',
      type: 'string',
      flex: 1,
      editable: false,
    }
  ];

const valores = [
    {
        id: "gustavo.ventura@institutojef.org.br",
        name: "Gustavo Okamoto Ventura",
        class: "2E Tech",
        group: "Azul"
    },
    {
        id: "gabriel.silva@germinare.org.br",
        name: "Gabriel Felix",
        class: "2E Tech",
        group: "Laranja"
    },
    {
        id: "lauro.meireles@institutojef.org.br",
        name: "Lauro",
        class: "2E Tech",
        group: "Rosa"
    },
    {
        id: "ana.teixeira@germinare.org.br",
        name: "Ana Zampier",
        class: "2E Tech",
        group: "Laranja"
    }
]

  export {columns, valores}