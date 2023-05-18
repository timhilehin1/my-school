import { React, useState } from "react";
import { TableBody, TableCell, TableHead, TableRow, styled,  Table, tableCellClasses, TableContainer, Paper, CssBaseline } from '@mui/material'


function Statement() {

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

      function createBillData(SN, CATEGORY, AMOUNT, STATUS) {
  return { SN, CATEGORY, AMOUNT, STATUS };
}

const rows = [
  createBillData('1', 'TUTION', 50000, 'PENDING'),
  createBillData('2', 'STATIONERIES', 5000, 'PENDING'),
  createBillData('3', 'MEDICALS', 5000, 'PENDING'),
];

        function createHistoryData(id, receiptNo, cat, amt, balance) {
  return {id, receiptNo, cat, amt, balance };
}

const rowss = [
  createHistoryData('1', '11111', 'tution', 5000, 0),
  createHistoryData('2', '11111', 'stationeries', 5000, 0),
  createHistoryData('3', '11111', 'medicals', 5000, 0)
];

    
        let NigerianNaira = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
});



    return (
        <div >

            <header className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-2 bg-[#ffffff]">

                <p className="font-bold">Name</p>
                <p className="">Ogunmepon Timilehin</p>
                <p className="font-bold">Current Class</p>
                <p>JSS2</p>
                <p className="font-bold">Admission Number</p>
                <p>10001</p>
                <p className="font-bold">Current Session</p>
                <p>2022 / 2023</p>
                
            </header>

            <main className="bg-[#f3f3f3] h-screen mt-2 p-2">
                 <select
                    onChange={handleChange}
                    name = "session"
                >
            <option className="font-bold"  value="" disabled selected>Select Session</option>
            <option value="2017/2018">2017/2018</option>
            <option value="2018/2019">2018/2019</option>
            <option value="2019/2020">2019/2020</option>
            <option value="2020/2021">2020/2021</option>
            <option value="2021/2022">2021/2022</option>
            <option value="2022/2023">2022/2023</option>
                </select>
                    
                {/* session will be dynamic */}
                <p className="font-bold text-lg text-center">Statement of Account for 2022/2023 Session (Naira)</p>

                <header className="text-lg font-bold text-center">BILL</header>
                <section className='bg-[#ffffff] mt-2'>
                        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S/N</TableCell>
            <TableCell align="right">CATEGORY</TableCell>
            <TableCell align="right">AMOUNT(NAIRA)</TableCell>
            <TableCell align="right">STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.SN}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.SN}
              </TableCell>
              <TableCell align="right">{row.CATEGORY}</TableCell>
              <TableCell align="right">{NigerianNaira.format(row.AMOUNT)}</TableCell>
              <TableCell align="right">{row.STATUS}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                </section>

                
                       <p  className="text-lg font-bold text-center mt-8">PAYMENT HISTORY</p>
                     <section className='bg-[#ffffff] mt-2'>
                        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S/N</TableCell>
            <TableCell align="right">RECEIPT NO</TableCell>
            <TableCell align="right">CATEGORY</TableCell>
            <TableCell align="right">AMOUNT(NAIRA)</TableCell>
            <TableCell align="right">BALANCE(NAIRA)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowss.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.receiptNo}</TableCell>
              <TableCell align="right">{row.cat}</TableCell>
                <TableCell align="right"> {NigerianNaira.format(row.amt)}</TableCell>
                <TableCell align="right">{row.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


                </section>
                    
                
            </main>
            
        </div>
    )
}

export default Statement