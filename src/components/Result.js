import React from 'react';

const Result = props => (
    <div>
        {props.curResult.length!==0 &&
        <table style={{width:"100%"}}>
            <tr>
                <th>Nama</th>
                <th>NIM Jurusan</th>
                <th>NIM TPB</th>
                <th>Prodi</th>
            </tr>
            
                {props.curResult.map((data)=>{
                    return(
                        <tr>
                            <th>{data.name}</th>
                            <th>{data.nim_jur}</th>
                            <th>{data.nim_tpb}</th>
                            <th>{data.prodi}</th>
                        </tr>
                    );
                })}
        </table>
        }
        {props.curResult.length===0 && <p>Hasil tidak ditemukan</p>}
        {props.prevResult.length!==0 && <button onClick={props.prev}>Sebelumnya</button>}
        {props.nextResult.length!==0 && <button onClick={props.next}>Selanjutnya</button>}
    </div>
);

export default Result;