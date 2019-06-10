import React from 'react';
import '../styles/Result.css'

const Result = props => (
    <div className='main-result'>
        {/* {props.curResult.length!==0 && */}
        <table className='table-result'>
            <tbody>
                <tr>
                    <th>Nama</th>
                    <th>NIM Jurusan</th>
                    <th>NIM TPB</th>
                    <th>Prodi</th>
                </tr>
                
                    {props.curResult.map((data)=>{
                        return(
                            <tr key={data.name}>
                                <td>{data.name}</td>
                                <td>{data.nim_jur}</td>
                                <td>{data.nim_tpb}</td>
                                <td>{data.prodi}</td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
        {/* } */}
        
        {props.curResult.length===0 && <p>Hasil tidak ditemukan</p>}
        {props.prevResult.length!==0 && <button id='prev' className='button-sign' onClick={props.prev}>Sebelumnya</button>}
        {props.nextResult.length!==0 && <button id='next' className='button-sign' onClick={props.next}>Selanjutnya</button>}
    </div>
);

export default Result;