import React,{useState} from "react";
import Counter from './counter';

const CountersList = () => {
    const initialState = [
        {id: 0, value: 0, name: 'Ненужная вещь'},
        {id: 1, value: 4, name: 'Ложка'},
        {id: 2, value: 0, name: 'Вилка'},
        {id: 3, value: 0, name: 'Тарелка'},
        {id: 4, value: 0, name: 'Набор минималиста'},
    ];
    const [counters, setCounters] = useState(initialState);
    const newArray = [...counters];
    const handleDelete = (id) => {
        const newCounters = counters.filter(c => c.id !== id);
        setCounters(newCounters);
    };
    const handleReset = () => {
        setCounters(initialState);
        console.log('hadle reset');
    };
    const handleIncrement = (id) => {
        console.log('handle increment:', id);
        const index = counters.findIndex(count => count.id === id);
        newArray[index].value++;
        setCounters(newArray);
    };
    const handleDecrement = (id) => {
        console.log('handle decrement:', id);
        const index = counters.findIndex(count => count.id === id);
        newArray[index].value--;
        setCounters(newArray);
    };
    return (
        <>
        {counters.map(count => 
        <Counter 
            key={count.id} 
            onDelete={handleDelete}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            {...count}
        />)}
        <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>        </>
    );
}


export default CountersList;