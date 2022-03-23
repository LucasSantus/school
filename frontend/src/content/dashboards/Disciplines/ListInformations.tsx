import { ChangeEvent, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button, Container, Grid, Tab, Tabs, Typography } from '@mui/material';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import RecentOrders from 'src/content/applications/Transactions/RecentOrders';
import DataGridCustom from 'src/components/DataGrid/DataGrid';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DisciplineInterface from 'src/types/discipline.type';

interface InterfaceInformations {
    discipline: DisciplineInterface;
    loading: boolean;
}

const ListInformations: React.FC<InterfaceInformations> = (props) => {
    const columns: GridColDef[] = [
        {
            field: 'first_name',
            headerName: 'Nome',
            flex: 0.5,
            minWidth: 200,
        },
        {
            field: 'last_name',
            headerName: 'Sobrenome',
            flex: 0.4,
            minWidth: 200,
        },
        {
            field: 'email',
            headerName: 'E-mail',
            flex: 0.4,
            minWidth: 200,
        },
    ];

    const rows = [
        { id: "1", first_name: 'Lannister', last_name: 'Cersei', email: "42" },
        { id: "2", first_name: 'Lannister', last_name: 'Jaime', email: "45" },
        { id: "3", first_name: 'Stark', last_name: 'Arya', email: "16" },
        { id: "4", first_name: 'Targaryen', last_name: 'Daenerys', email: "432" },
        { id: "5", first_name: 'Melisandre', last_name: 'dasdsa', email: "150" },
        { id: "6", first_name: 'Clifford', last_name: 'Ferrara', email: "44" },
        { id: "7", first_name: 'Frances', last_name: 'Rossini', email: "36" },
        { id: "8", first_name: 'Roxie', last_name: 'Harvey', email: "65" },
    ];

    useEffect(() => {
        console.log(props.discipline.id)
    }, []);

    return (
        <>
            <Helmet>
                <title>Disciplinas</title>
            </Helmet>

            <Container maxWidth="lg">
                <Grid container justifyContent="space-between" alignItems="center" paddingTop={3}>
                    <Grid item>
                        <Typography variant="h2" component="h2" gutterBottom>
                            Alunos
                        </Typography>
                        <Typography variant="subtitle2">
                            Estes são os alunos recentes
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            sx={{ mt: { xs: 2, md: 0 } }}
                            variant="contained"
                        >
                            Cadastrar Aluno
                        </Button>
                    </Grid>
                </Grid>

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid 
                        item 
                        xs={12}
                    >
                        <DataGridCustom
                            title={"Não existem registros!"}
                            loading={props.loading}
                            columns={columns}
                            rows={rows}
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default ListInformations;
