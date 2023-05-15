import {React, useState, useMemo} from "react";
import { IoNotifications } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { HiDownload } from "react-icons/hi";
import { AiOutlineMail, AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TableBody, TableCell, TableHead, TableRow, styled,  Table, tableCellClasses, TableContainer, Paper, CssBaseline } from '@mui/material'



function Profile() {

    // #cfd8dc

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));

      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));

      function createData(bookNo, bookTitle, issueDate, dueReturn) {
        return { bookNo, bookTitle, issueDate, dueReturn};
      }

      const rows = [
        createData('01', 'Richest man in BabyLon', 'issueDate', 'dueReturn'),
        createData('02', 'Richest man in BabyLon', 'issueDate', 'dueReturn'),
        createData('03', 'Richest man in BabyLon', 'issueDate', 'dueReturn'),
        createData('04', 'Richest man in BabyLon', 'issueDate', 'dueReturn'),
        createData('05', 'Richest man in BabyLon', 'issueDate', 'dueReturn'),
      ];




const columns = [
    {
        id : 'bookNo',
        label : 'bookNo',
        minWidth : '100',
    },
    {
        id : 'bookTitle',
        label : 'bookTitle',
        minWidth : '100',
    },
    {
        id : 'issueDate',
        label : 'issueDate',
        minWidth : '100',
    },
    {
        id : 'dueReturn',
        label : 'dueReturn',
        minWidth : '100',
    },

]


    return (
        <div className="">


            <section className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 p-2">

                <div className="intro bg-[#ffffff] rounded">
                   <p>Hi love</p>
                </div>

                  <div className="notice-card bg-[#ffffff] rounded p-2">
                    <header className="text-xl font-bold">Notice Board</header>
                    <hr />

                    <main className=" overflow-auto h-36 md:h-40">
                    <div className="flex gap-2 text-sm p-1">
                        <AiOutlineMail style={{ color: "red" }} size={20} />
                        <p>Fees Reminder ( 11/05/2023)</p>
                    </div>
                    <hr />
                    <div className="flex gap-2 text-sm p-1">
                        <AiOutlineMail style={{ color: "red" }} size={20} />
                        <p>Student Health Check-up ( 11/05/2023)</p>
                    </div>
                    <hr />
                    <div className="flex gap-2 text-sm p-1">
                        <AiOutlineMail style={{ color: "red" }} size={20} />
                        <p>Summer Vacation Notice!!!!!!!!!!! ( 11/05/2023)</p>
                    </div>
                    <hr />

                    <div className="flex gap-2 text-sm p-1">
                        <AiOutlineMail style={{ color: "red" }} size={20} />
                        <p>2022/2023 Valedictory Service ( 11/05/2023)</p>
                    </div>
                    <hr />

                   <Link to=""> <div className="flex gap-2 text-sm p-1">
                        <AiOutlineMail style={{ color: "red" }} size={20} />
                        <p className="flex"> <p>Please try me</p>( <div className="flex items-center"><AiOutlineClockCircle style={{ color: "" }} size={15}/> <p>11/05/2023</p></div>)</p>
                    </div>
                        <hr />
                        </Link>

                        <Link to=""> <div className="flex gap-2 text-sm p-1">
                        <AiOutlineMail style={{ color: "red" }} size={20} />
                        <p className="flex"> <p>Please try me</p>( <div className="flex items-center"><AiOutlineClockCircle style={{ color: "" }} size={15}/> <p>11/05/2023</p></div>)</p>
                    </div>
                        <hr />
                        </Link>

                        <Link to=""> <div className="flex gap-2 text-sm p-1">
                        <AiOutlineMail style={{ color: "red" }} size={20} />
                        <p className="flex"> <p>Please try me</p>( <div className="flex items-center"><AiOutlineClockCircle style={{ color: "" }} size={15}/> <p>11/05/2023</p></div>)</p>
                    </div>
                        <hr />
                    </Link>
                    </main>
                </div>

            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">

                <div className="bg-[#ffffff] rounded subject h-64 md:h-72 relative">
                    <header className="text-xl font-bold">Subject Progress</header>
                    <main className="contentt  overflow-auto h-60 md:h-64">
                    <div className="flex items-center justify-between p-2 ">
                    <p className="text-sm">Subject</p>
                    <p className="text-sm">33%</p>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between p-2">
                    <p className="text-sm">English</p>
                    <p className="text-sm">40%</p>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between p-2">
                    <p className="text-sm">Mathematics</p>
                    <p className="text-sm">40%</p>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between p-2">
                    <p className="text-sm">Basic Science</p>
                    <p className="text-sm">45%</p>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between p-2">
                    <p className="text-sm">Social Studies</p>
                    <p className="text-sm">60%</p>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between p-2">
                    <p className="text-sm">History</p>
                    <p className="text-sm">34%</p>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between p-2">
                    <p className="text-sm">History</p>
                    <p className="text-sm">34%</p>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between p-2">
                    <p className="text-sm">History</p>
                    <p className="text-sm">34%</p>
                    </div>
                    </main>
                </div>


                <div className="bg-[#ffffff] rounded subject h-64 md:h-72 overflow-auto">
                       <header className="text-xl font-bold">Upcoming Assessment</header>
                    <hr />
                </div>

                <div className="bg-[#ffffff] rounded assignnment h-64 md:h-72 relative">

                    <header className="text-xl font-bold">Holiday Assignment</header>

                    <main  className="contentt  overflow-auto h-60 md:h-64">
                    <section className="p-2">
                        <div className="flex gap-4 justify-between">
                            <p className="text-sm">Basic Science</p>
                              <div className="flex">
                              <p className="text-sm">Download pdf</p>
                               <p> <HiDownload size={20} /></p>
                               </div>
                        </div>
                        <div className="flex gap-4 justify-between">
                        <p className="text-sm">Submission Date: 30/05/2023</p>
                        <p className="text-sm">Status : pending?</p>
                        </div>
                        </section>

                        <hr />

                      <section className="p-2">
                        <div className="flex gap-4 justify-between">
                            <p className="text-sm">Basic Science</p>
                              <div className="flex">
                              <p className="text-sm">Download pdf</p>
                               <p> <HiDownload size={20} /></p>
                               </div>
                        </div>
                        <div className="flex gap-4 justify-between">
                        <p className="text-sm">Submission Date: 30/05/2023</p>
                        <p className="text-sm">Status : pending?</p>
                        </div>
                    </section>

                        <hr />

                    <section className="p-2">
                        <div className="flex gap-4 justify-between">
                            <p className="text-sm">Basic Science</p>
                              <div className="flex">
                              <p className="text-sm">Download pdf</p>
                               <p> <HiDownload size={20} /></p>
                            </div>
                        </div>

                        <div className="flex gap-4 justify-between">
                        <p className="text-sm">Submission Date: 30/05/2023</p>
                        <p className="text-sm">Status : pending?</p>
                        </div>
                    </section>

                        <hr />

                      <section className="p-2">
                        <div className="flex gap-4 justify-between">
                            <p className="text-sm">Basic Science</p>
                              <div className="flex">
                              <p className="text-sm">Download pdf</p>
                               <p> <HiDownload size={20} /></p>
                               </div>
                        </div>
                        <div className="flex gap-4 justify-between">
                        <p className="text-sm">Submission Date: 30/05/2023</p>
                        <p className="text-sm">Status : pending?</p>
                        </div>
                    </section>

                      <section className="p-2">
                        <div className="flex gap-4 justify-between">
                            <p className="text-sm">Basic Science</p>
                              <div className="flex">
                              <p className="text-sm">Download pdf</p>
                               <p> <HiDownload size={20} /></p>
                               </div>
                        </div>
                        <div className="flex  justify-between">
                        <p className="text-sm">Submission Date: 30/05/2023</p>
                        <p className="text-sm">Status : pending?</p>
                        </div>
                    </section>
                        <hr />
                        </main>
                </div>
            </section>

            <section className="grid grid-cols-1  lg:grid-cols-[30%_30%_40%] gap-2 p-2">

                <div className="bg-[#ffffff] rounded teachers h-64 md:h-72 relative p-2">
                   <header className="text-xl  font-bold">Teacher's List</header>

                    <main className="overflow-auto h-60 md:h-64">
                    <section className="bg-[#f3f3f3] rounded-sm mt-1 p-1 gap-2 flex">
                        <RxAvatar size={25} />
                        <div>
                        <p>Mr Faleke A.0</p>
                        <div className="flex gap-2">
                        <p>(10001)</p>
                        <button className="bg-[#5AAF4B] text-allwhite text-sm rounded p-0.5">Basic Science</button>
                            </div>
                        </div>
                        </section>

                    <hr />

                     <section className="bg-[#f3f3f3] rounded-sm mt-1 p-1 gap-2 flex">
                        <RxAvatar size={25} />
                        <div>
                        <p>Mr Faleke A.0</p>
                        <div className="flex gap-2">
                        <p>(10001)</p>
                        <button className="bg-[#5AAF4B] text-allwhite text-sm rounded p-0.5">Basic Science</button>
                            </div>
                        </div>
                        </section>

                    <hr />

                     <section className="bg-[#f3f3f3] rounded-sm mt-1 p-1 gap-2 flex">
                        <RxAvatar size={25} />
                        <div>
                        <p>Mr Faleke A.0</p>
                        <div className="flex gap-2">
                        <p>(10001)</p>
                        <button className="bg-[#5AAF4B] text-allwhite text-sm rounded p-0.5">Basic Science</button>
                            </div>
                        </div>
                    </section>
                    <hr />

                     <section className="bg-[#f3f3f3] rounded-sm mt-1 p-1 gap-2 flex">
                        <RxAvatar size={25} />
                        <div>
                        <p>Mr Faleke A.0</p>
                        <div className="flex gap-2">
                        <p>(10001)</p>
                        <button className="bg-[#5AAF4B] text-allwhite text-sm rounded p-0.5">Basic Science</button>
                            </div>
                        </div>
                    </section>
                        <hr />


                     <section className="bg-[#f3f3f3] rounded-sm mt-1 p-1 gap-2 flex">
                        <RxAvatar size={25} />
                        <div>
                        <p>Mr Faleke A.0</p>
                        <div className="flex gap-2">
                        <p>(10001)</p>
                        <button className="bg-[#5AAF4B] text-allwhite text-sm rounded p-0.5">Basic Science</button>
                            </div>
                        </div>
                    </section>
                        <hr />

                        </main>

                </div>

                <div className="bg-[#ffffff] rounded assignnment h-64 md:h-72">
                    <header className="text-xl  font-bold">Visitor List</header>
                    <hr />

                    <main className="overflow-auto h-60 md:h-64">

                        <section className="bg-[#f3f3f3] p-1 text-sm">
                            <p>Mr Oladapo</p>
                            <p>(purpose: PTA)</p>
                            <p>15/5/2023</p>
                        </section>
                        <hr />

                         <section className="bg-[#f3f3f3] p-1 text-sm">
                            <p>Mr Oladapo</p>
                            <p>(purpose: PTA)</p>
                            <p>15/5/2023</p>
                        </section>
                        <hr />

                         <section className="bg-[#f3f3f3] p-1 text-sm">
                            <p>Mr Oladapo</p>
                            <p>(purpose: PTA)</p>
                            <p>15/5/2023</p>
                        </section>
                        <hr />

                         <section className="bg-[#f3f3f3] p-1 text-sm">
                            <p>Mr Oladapo</p>
                            <p>(purpose: PTA)</p>
                            <p>15/5/2023</p>
                        </section>
                        <hr />

                         <section className="bg-[#f3f3f3] p-1 text-sm">
                            <p>Mr Oladapo</p>
                            <p>(purpose: PTA)</p>
                            <p>15/5/2023</p>
                        </section>
                        <hr />

                         <section className="bg-[#f3f3f3] p-1 text-sm">
                            <p>Mr Oladapo</p>
                            <p>(purpose: PTA)</p>
                            <p>15/5/2023</p>
                        </section>
                        <hr/>

                    </main>
                </div>



                <div  className="bg-[#ffffff] rounded library h-64 md:h-72 ">
                      <header className="text-xl  font-bold">Library Book Issue List</header>
                    <hr />

                    <main className="overflow-auto h-60 md:64">
                    {/* //use a table with a fixed header */}
                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} stickyHeader  aria-label="sticky table">
        <TableHead>
          <TableRow>
              {
                  columns.map((col)=>{
                      <TableCell
                      key={col.id}
                      align={col.align}
                      style={{ minWidth: col.minWidth }}>
                          {col.label}
                      </TableCell>
                  })
              }
            <StyledTableCell>Book id</StyledTableCell>
            <StyledTableCell align="right">Book title</StyledTableCell>
            <StyledTableCell align="right">Issue date</StyledTableCell>
            <StyledTableCell align="right">Return date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.bookNo}>
              <StyledTableCell component="th" scope="row"> {row.bookNo}</StyledTableCell>
              <StyledTableCell align="right">{row.bookTitle}</StyledTableCell>
              <StyledTableCell align="right">{row.issueDate}</StyledTableCell>
              <StyledTableCell align="right">{row.dueReturn}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                </main>

                </div>

            </section>



        </div>
    )
}

// {
//     bookNo : '04',
//     bookTitle : 'Richest man in babylon',
//     issueDate : '01/01/2023',
//     returnDate : '30/01/2023'
// },

export default Profile
