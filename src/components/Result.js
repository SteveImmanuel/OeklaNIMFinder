import React from 'react';
import '../styles/Result.css'

const Result = props => (
    <div className='main-result'>
        {Array.isArray(props.curResult) && props.curResult.length!==0 &&
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
                                <tr key={data.nim_tpb}>
                                    <td>{data.name}</td>
                                    <td>{data.nim_jur}</td>
                                    <td>{data.nim_tpb}</td>
                                    <td>{data.prodi}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        }
        <p>{props.message}</p>
        {Array.isArray(props.prevResult) && props.prevResult.length!==0 && <button id='prev' className='button-sign' onClick={props.prev}>Sebelumnya</button>}
        {Array.isArray(props.nextResult) && props.nextResult.length!==0 && <button id='next' className='button-sign' onClick={props.next}>Selanjutnya</button>}
    </div>
);

export default Result;