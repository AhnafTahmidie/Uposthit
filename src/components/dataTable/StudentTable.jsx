// import React from 'react'
// import { DataGrid } from '@mui/x-data-grid';
// import * as AiIcons from 'react-icons/ai'
// import * as FaIcons from 'react-icons/fa'
// import { studentColumns, studentRows } from '../tableData/studentData';

// const actionColumn = [
//   {
//     field: "action",
//     headerName: "Action",
//     width: 200,
//     renderCell: () => {
//       return (
//         <div className="cellAction text-center grid grid-cols-2 w-full">
//           <button className="viewButton hover:bg-violet-200 rounded-lg flex items-center justify-center space-x-2">
//             <p className='text-sm'>View</p>
//             <FaIcons.FaShareSquare className='text-violet-800'/>
//           </button>
//           <button className="deleteButton hover:bg-red-200 rounded-lg flex items-center justify-center space-x-2">
//             <p className="text-sm">Delete</p>
//             <AiIcons.AiFillDelete className='text-red-800'/>
//           </button>
//         </div>
//       )
//     }
//   }
// ]

// // const DataTable = ({data}) => {

// //   return (
// //     <div className='text-center mx-7 my-6 border rounded-lg focus:ring-0 focus:border-none'>
// //       <DataGrid className=''
// //         rows={data? data : studentRows}
// //         columns={studentColumns.concat(actionColumn)}
// //         pageSize={5}
// //         getRowId={(row) => row.s_reg}
// //         rowsPerPageOptions={[5]}
// //         checkboxSelection
// //         disableSelectionOnClick
// //         autoHeight
// //       />
// //     </div>
// //   )
// // }

// const DataTable = ({rows, columns}) => {

//   return (
//     <div className='text-center mx-7 my-6 border rounded-lg focus:ring-0 focus:border-none'>
//       <DataGrid rows={rows} columns={columns}
//       />
//     </div>
//   )
// }

// export default DataTable