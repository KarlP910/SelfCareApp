import React, { useState, useEffect } from 'react';
import { firestore } from '../services/firebase';
import JournalImg from '../assets/journal.svg'
import firebase from 'firebase';

function Journal() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState('');
  const [toUpdateId, setToUpdateId] = useState('');


  useEffect(() => {
    console.log('useEffect Hook!!!');

    firestore.collection('todos').orderBy('datetime', 'desc').onSnapshot(snapshot => {
      console.log('Firebase Snap!');
      setTodos(snapshot.docs.map(doc => {
        return {
          id: doc.id,
          name: doc.data().todo,
          datatime: doc.data().datatime
        }
      }))
    })

  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    firestore.collection('todos').add({
      todo: input,
      datetime: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  const deleteTodo = (id) => {
    firestore.collection('todos').doc(id).delete().then(res => {
      console.log('Deleted!', res);
    });
  }

  const openUpdateDialog = (todo) => {
    setOpen(true);
    setToUpdateId(todo.id);
    setUpdate(todo.name);
  }

  const editTodo = () => {
    firestore.collection('todos').doc(toUpdateId).update({
      todo: update
    });
    setOpen(false);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='md:mx-28 mx-4 text-white pt-8 pb-12'>
      <div className='mx-36'>
        <h1 className='text-3xl'>Your daily Journal is here</h1>
        <div
          className="flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl drop-shadow-3xl p-3 mx-auto">
          <div className="w-full grid place-items-center md:drop-shadow-3xl">
            <img src={JournalImg} width="400" height="400" alt="img" />
          </div>
          <div className="w-full md:w-2/3 text-white flex flex-col p-3">
            <h1 className="text-xl text-justify">Seeing your progress can also give you a serious confidence boost. You can feel proud looking back at the challenges you faced and seeing how far you've come.</h1>
            <form noValidate className='grid place-items-center py-4'>
              <textarea required id="todo" placeholder="Enter Journal " name="todo" value={input} className="text-black w-full font-xl p-2 rounded-md" onChange={event => setInput(event.target.value)} />
              <button className='bg-secondary w-full py-2 px-8 rounded-md text-lg my-4' onClick={addTodo}>Add</button>
            </form>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-around w-full px-6 gap-y-6">
        {todos.map(todo => (

          <div key={todo.id} className="flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl drop-shadow-3xl px-3 md:py-5 py-3 w-96 mx-auto border border-white bg-white">
            <div className="w-full bg-white flex flex-col p-3">
              <textarea className="font-black text-gray-800 text-2xl placeholder:text-black " placeholder='This is for the demo' primary={todo.name} secondary={todo.datetime} />
              <div className='flex justify-around space-x-2 pt-4 mx-4'>
                <div className='bg-secondary cursor-pointer py-2 px-8 rounded-md text-lg' edge="end" aria-label="Edit" onClick={() => openUpdateDialog(todo)}>
                  Edit
                </div>
                <div className='bg-secondary cursor-pointer py-2 px-8 rounded-md text-lg' edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
                  Delete
                </div>
              </div>
            </div>
          </div>
        ))
        }
      </div>

      {/* <div open={open} onClose={handleClose}>
        <div>
          <input type="text" name="updateTodo" value={update} placeholder="My daily Journal" onChange={event => setUpdate(event.target.value)} />
        </div>
        <div>
          <button onClick={handleClose} color="primary">
            Cancel
          </button>
          <button onClick={editTodo} color="primary">
            Save
          </button>
        </div>
      </div> */}

    </div>
  );
}

export default Journal;
