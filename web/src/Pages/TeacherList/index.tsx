import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHerader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import './styles.css';
import api from '../../services/api';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);
    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');

    async function searcTeahers(e: FormEvent){
        e.preventDefault();
        try{
            const response = await api.get('classes',{
                params: {
                    subject,
                    week_day,
                    time
                }
            })
            setTeachers(response.data);
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div id='page-teacher-list' className='container'>
            <PageHeader title="Estes são os proffys disponíveis">
                <form id='search-teachers' onSubmit={searcTeahers}>
                    <Select 
                        name='subject' 
                        label='Matéria' 
                        options={[
                            {value:'Artes', label:'Artes' },
                            {value:'Matemática', label:'Matemática' },
                            {value:'Biologia', label:'Biologia' },
                            {value:'Português', label:'Português' },
                            {value:'Redação', label:'Redação' },
                            {value:'Física', label:'Física' }
                        ]}
                        value={subject}
                        onChange={(e) => {setSubject(e.target.value)}}
                    />
                    <Select  name='week_day' label='Dia da Semana'  options={[
                        {value:'0', label:'Domingo' },
                        {value:'1', label:'Segunda-Feira' },
                        {value:'2', label:'Terça-feira' },
                        {value:'3', label:'Quarta-Feira' },
                        {value:'4', label:'Quinta-Feira' },
                        {value:'5', label:'Sexta-Feira' },
                        {value:'6', label:'Sábado' }
                    
                        ]}
                        value={week_day}
                        onChange={(e) => {setWeek_day(e.target.value)}}
                    />
                    <Input 
                        name='time' 
                        label='time' 
                        type='time'
                        value={time}
                        onChange={(e) => {setTime(e.target.value)}}
                    />
                    <button type='submit'>
                        Buscar
                    </button>
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher}/>
                })}
            </main>
        </div>
    )
}

export default TeacherList;