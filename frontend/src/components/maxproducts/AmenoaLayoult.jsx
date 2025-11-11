import * as React from 'react';
import {Boxproduct} from '../Boxproduct';
import amenoacidopages from './amenoacidopages';
import classes from "./Pages.module.css";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ReactPaginate from "react-paginate";

const LIMIT = 6;
const MAX_ITEMS = 6;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const pageSize = 6;

export default function AmenoaLayoult(props) {
    const {setOpcao} = props
    const [activos, setActivos] = React.useState([]);
    const [offset, setOffset] = React.useState(0);
    const current = offset ? offset / LIMIT + 1 : 1;
    const pages = Math.ceil(activos.length / LIMIT);
    const first = Math.max(current - MAX_LEFT, 1);

    const [pagination, setPagination] = React.useState({
        count: 0,
        from: 0,
        to: pageSize,
    });

    function onPageChange(page) {}

    const handlePageClick = (data) => {
        console.log();
        if (activos.length > 0) {
            const from = (data.selected - 1) * pageSize;
            const to = (data.selected - 1) * pageSize + pageSize;
            setPagination({ ...pagination, from: from, to: to });
        } else {
            setPagination({ ...pagination, from: 0, to: pageSize });
        }
    };

    React.useEffect(() => {
        //setInfo({});
        setOpcao("AMENOACIDOS");
        amenoacidopages
        .getData({ from: pagination.from, to: pagination.to })
        .then((response) => {
            setPagination({ ...pagination, count: response.count });
            if (response.count > 0 && response.data.length == 0) {
            serviceactive.getData({ from: 0, to: pageSize }).then((response) => {
                setPagination({
                count: response.count,
                from: 0,
                to: pageSize,
                });
                setActivos(response.data);
                console.log(response);
            });
            }
            setActivos(response.data);
            console.log(response);
        });
    }, [pagination.from, pagination.to]);

    return(
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                //pl: 5,
                m: 1,
                height: "100vh"
                
            }}
        >
            {activos.length == 0 ? (
            <Typography
                sx={{
                //mt: 5,
                //ml: 5,
                fontSize: ".9rem",
                fontWeight: 500,
                fontFamily: "Oswald, serif",
                "@media (max-width: 800px)": { fontSize: ".8rem" },
                "@media (max-width: 400px)": { fontSize: ".6rem" },
                }}
            >
                Não têm blogs
            </Typography>
            ) : (
            <Grid sx={{ flexGrow: 1, mt: 0.1 }} container spacing={2}>
                <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={2}>
                    {activos.map((slide, index) => {
                    return (
                        <Grid key={index} item sm={6} md={4}>
                        <Boxproduct
                            primery={"#121313ff"}
                            secudary={"#0F9BF2"}
                            product={slide}
                        />
                        </Grid>
                    );
                    })}
                </Grid>
                </Grid>
            </Grid>
            )}
            {activos.length == 0 ? (
            ""
            ) : (
            <Box
                className={classes.pagination}
                sx={{
                display: "flex",
                justifyContent: "start",
                mt: 1,
                mb: 1.5,
                alignItems: "start",
                ml: "-70%",
                "@media (max-width: 800px)": { ml: "-60%" },
                "@media (max-width: 500px)": { ml: 0 },
                }}
            >
                <ReactPaginate
                previousLabel={
                    <button
                    //size="small"
                    //onClick={submit}
                    onClick={() => onPageChange(current - 1)}
                    disabled={current === 1}
                    >
                    {"<"}
                    </button>
                }
                nextLabel={
                    <button
                    //size="small"
                    //onClick={submit}
                    onClick={() => onPageChange(current - 1)}
                    disabled={current === 1}
                    >
                    {">"}
                    </button>
                }
                breakLabel={"..."}
                pageCount={pagination.count}
                marginPagesDisplayed={3}
                pageRageDisplayed={3}
                containerClassName={classes.pagination}
                activeClassName={`${classes.item} ${classes.active}`}
                disabledClassName={classes.disabled_page}
                onPageChange={handlePageClick}
                />
            </Box>
            )}
        </Box>
    )
}