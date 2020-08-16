import React from 'react';
import PageHeader from '../../components/PageHerader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import './styles.css';

function TeacherList() {
    return (
        <div id='page-teacher-list' className='container'>
            <PageHeader title="Estes são os proffys disponíveis">
                <form id='search-teachers'>
                    <Select name='subject' label='Matéria' options={[
                        {value:'Artes', label:'Artes' },
                        {value:'Matemática', label:'Matemática' },
                        {value:'Biologia', label:'Biologia' },
                        {value:'Português', label:'Português' },
                        {value:'Redação', label:'Redação' },
                        {value:'Física', label:'Física' }

                    ]}/>
                      <Select  name='week_day' label='Dia da Semana'  options={[
                        {value:'0', label:'Domingo' },
                        {value:'1', label:'Segunda-Feira' },
                        {value:'2', label:'Terça-feira' },
                        {value:'3', label:'Quarta-Feira' },
                        {value:'4', label:'Quinta-Feira' },
                        {value:'5', label:'Sexta-Feira' },
                        {value:'6', label:'Sábado' }
                    
                    ]}/>
                    <Input name='time' label='time' type='time' />
                </form>
            </PageHeader>
            <main>
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;