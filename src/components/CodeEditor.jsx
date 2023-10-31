import axios from 'axios';
import React, { useState } from 'react'

function CodeEditor() {
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
  
    const runCode = async () => {
      try {
        const response = await axios.post('http://localhost:3301/api/run', { code });
        setOutput(response.data.output);
      } catch (error) {
        console.error(error);
      }
    };
  return (
    <div className='container-fluid main p-3 bg-black'>
    <div className="row">
        <div className="col-12 col-md-6 col-lg-6 bg-dark">
        <div className="question">
            <div className="question text-white"><p className="fs-3 text-warning">1) Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, soluta!?</p>
            <div className="description">
                <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium et vero quasi necessitatibus laboriosam nulla deleniti, voluptatem minus ratione rerum culpa? Laudantium possimus nihil ipsam voluptatem eos, inventore dolorum! Expedita magni accusantium consequuntur sequi veniam, quaerat exercitationem voluptas, vel id perferendis iste porro enim minima excepturi blanditiis provident. In iste aut, amet quaerat ullam aperiam alias dolorem nemo tenetur id officia excepturi. Ipsam corporis commodi harum ullam ipsa laudantium. Numquam saepe autem est dolore provident? Ratione in eaque necessitatibus quibusdam molestias temporibus magni at cumque fugit voluptates maxime quisquam facere minima laborum libero itaque eum, officiis cum possimus amet reprehenderit!</p>
                </div></div>
                <div className="output">
                    <h1 className="fs-3 text-danger">Input</h1>
                    <p className="text-warning">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, veniam.</p>
                    <p className="fs-3 text-danger">Output</p>
                    <p className="text-success">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ipsum!</p>
                </div>
        </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
            <div className="editor">
            <textarea
            className='form-control bg-dark text-white w-100'
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows="10"
          cols="50"
        ></textarea>
        <div className="text-end d-flex flex-wrap gap-2 p-3">
        <button onClick={runCode} className='btn bg-success text-white'>Run</button>
        <button onClick={runCode} className='btn bg-danger text-white'>Submit</button>
        </div>
        <div className='output bg-dark text-danger p-3'>
            <p className="fs-3 text-white">Output</p>
            <pre>{output}</pre>
        </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CodeEditor
