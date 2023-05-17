import React, { useState } from "react";
import { Avatar } from '@mui/material';
import { TableBody, TableCell, TableHead, TableRow, styled,  Table, tableCellClasses, TableContainer, Paper, CssBaseline } from '@mui/material'



function Grades() {

    const [session, setSession] = useState({
        session : ''
    })


    function handleChange(event) {
        // will be used to filter grades based on session selected, each sesion will show grades for the three terms
        const { name, value } = event.target
        setSession((prevdata) => {
            return {
                ...prevdata,
                [name] : value
            }
        }) 
    }


     function createData(SUBJECT, CA1, CA2, EXAM, GRADESCORE, TOTAL) {
      return { SUBJECT, CA1, CA2, EXAM, GRADESCORE, TOTAL};
    }

    
const rows = [
    createData('Social studies ', 15, 15, 70, 'A', 100),
    createData('Basic Science', 10, 10, 30, 'C', 50),
    createData('Health Education', 10, 10, 30, 'C', 50),
    createData('Mathematics', 10, 15, 40, 'B', 65 ),
    createData('English Language', 10, 10, 30, 'C', 50),
    createData('History and related studies', 10, 10, 30, 'C', 50),
    createData('Creative Arts & Reasoning', 10, 10, 30, 'C', 50),
    createData('Computer Programming', 10, 10, 30, 'C', 50),
    // createData('Basic Science', 10, 10, 30, 50),
    // createData('Basic Science', 10, 10, 30, 50),

];


    return (
        <div className="grid mt-2 grid-cols-1 mt-4  lg:grid-cols-[25%_75%]  gap-3 px-2 ">

            <section className="profile flex flex-col p-1 gap-4 rounded-sm bg-[#f7f7f7]">
                <header className="flex gap-4">
                <div>
                 <Avatar
               alt="student image"
               src="/static/images/avatar/1.jpg"
               sx={{ width: 56, height: 56 }}
                    />
                </div>

                  <div>
                   <p className="font-bold text-base">Ogunmepon Timilehin</p>
                    <p>AdmissionNo:  <span className="font-bold">10001</span></p>
                    </div>
                </header>

                <main className="main-details bg-[#ffffff]">

                      <div className="flex justify-between p-2.5 rounded text-sm">
                        <p className="">Current Session</p>
                        <p>2023/2024</p>
                    </div>

                       <hr />

                    <div className="flex justify-between p-2.5 rounded text-sm">
                        <p className="">Current class</p>
                        <p>JSS3(second term)</p>
                    </div>

                    <hr />

                     <div className="flex justify-between p-2.5 rounded text-sm">
                        <p className="">Gender</p>
                        <p>Male</p>
                    </div>

                    <hr />

                    <div className="flex justify-between p-2.5 rounded text-sm">
                        <p className="">Admission Date</p>
                        <p>15/05/2023</p>
                    </div>

                    <hr />

                    <div className="flex justify-between p-2.5 rounded text-sm">
                        <p className="">Email</p>
                        <p>oladapo@gmail.com</p>
                    </div>

                    <hr />

                    <div className="flex justify-between p-2.5 rounded text-sm">
                        <p className="">Date of Birth</p>
                        <p>24/02/2007</p>
                    </div>

                     <hr />

                </main>

                <section className=" bg-[#ffffff] mt-3">
                    <p className="font-semibold text-center">Grade Interpretation</p>

                    <hr/>
                    <div className="flex justify-between p-1 rounded text-sm">
                        <p className="">70 AND ABOVE</p>
                        <p>A</p>
                    </div>
                    <hr />

                    <div className="flex justify-between p-1 rounded text-sm">
                        <p className="">60-69</p>
                        <p>B</p>
                    </div>
                    <hr />
                    
                    <div className="flex justify-between p-1 rounded text-sm">
                        <p className="">50-59</p>
                        <p>C</p>
                    </div>
                    <hr />
                    
                    <div className="flex justify-between p-1 rounded text-sm">
                        <p className="">45-49</p>
                        <p>D</p>
                    </div>
                    <hr />
                    
                    <div className="flex justify-between p-1 rounded text-sm">
                        <p className="">BELOW 45</p>
                        <p>F</p>
                    </div>
                     <hr />


                </section>
            </section>

            {/* everything displayed here will be based on the student's history with the schoool */}
            <section className="grades">
                <div className="flex justify-between">

                <select
                    onChange={handleChange}
                    name = "session"
                >
            <option className="font-bold"  value="" disabled selected>Select Session</option>
            <option value="2017/2018">2017/2018(classname?)</option>
            <option value="2018/2019">2018/2019</option>
            <option value="2019/2020">2019/2020</option>
            <option value="2020/2021">2020/2021</option>
            <option value="2021/2022">2021/2022</option>
            <option value="2022/2023">2022/2023</option>
                </select>
                    <button className="text-sm bg-[#86efac] rounded p-1">Print Result</button>
                    
                    </div>
                

                {/* //number of results will be dependent on admission date and number of terms used ofc */}
                <div className="table-section">
                    <h3 className="font-bold text-center text-lg">{session.session} Session</h3>


                     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="caption table">
        
        <TableHead>
          <TableRow>
            <TableCell className='font-bold'>SUBJECT</TableCell>
            <TableCell align="center ">C.A 1(cumulative assessment) / 30</TableCell>
            <TableCell align="center">C.A 2(cumulative assessment) / 30</TableCell>
            <TableCell align="center">EXAM / 70</TableCell>
            <TableCell align="center">GRADE SCORE</TableCell>
            <TableCell align="center">TOTAL / 100</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.SUBJECT}>
              <TableCell component="th" scope="row">
                {row.SUBJECT}
              </TableCell>
              <TableCell align="center">{row.CA1}</TableCell>
              <TableCell align="center">{row.CA2}</TableCell>
               <TableCell align="center">{row.EXAM}</TableCell>
                <TableCell align="center">{row.GRADESCORE}</TableCell>
              <TableCell align="center">{row.TOTAL}</TableCell>
            </TableRow>
          ))}
        </TableBody>
           </Table>
                        <div className="block md:flex justify-between font-semibold px-1.5">
                            <div className="">
                            <p>Teacher's Remark: Ogunmepon is the class clown </p>
                            <p>Status: <button className="text-sm bg-[#86efac]  rounded p-1">promoted</button> </p>
                            </div>


                            <div>
                            <p>Overall Position: 8th</p>
                            <p>Number of students in class : 20</p>
                                </div>
                        </div>                        
                    </TableContainer>
                    

                    
             



                </div>
                

            </section>
        </div>

        )
}

export default Grades
