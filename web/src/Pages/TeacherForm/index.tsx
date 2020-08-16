import React, {useState, FormEvent} from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import warningIcon from '../../assets/images/icons/warning.svg'
import PageHeader from '../../components/PageHerader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
import './styles.css';


function TeacherForm() {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' },
    ]);
    const history = useHistory();


    function addNewScheduleItem() {
        setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
    }

    function setScheduleItemsValue(position: number, field: string, value: string){
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position){
                return { ...scheduleItem, [field]: value};
            }
            return scheduleItem;
        })
        setScheduleItems(updateScheduleItems);
    }

    function handleCreateClass(e: FormEvent){
        e.preventDefault();

        api.post('classes',{
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() =>{
            alert('Cadatsro realizado com sucesso!');
            history.push('/')
        }).catch(() => {
            alert('Erro no cadastro!');
        });
    }

    return (
        <div id='page-teacher-form' className='container'>
            <PageHeader 
                title="Que incrível que você quer dar aulas." 
                description='O primeiro passo é preencher esse formulário de inscrição.'
            />
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus Dados</legend>
                        <Input name='name' label='Nome Completo' value={name} onChange={(e) => { setName(e.target.value)}}/>
                        <Input name='avatar' label='Avatar' value={avatar} onChange={(e) => { setAvatar(e.target.value)}} />
                        <Input name='whatsapp' label='Whatsapp' value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value)}} />
                        <Textarea name='bio' label='Biografia' value={bio} onChange={(e) => { setBio (e.target.value)}} />
                    </fieldset>
                    <fieldset>
                        <legend>Sobre a matéria</legend>
                        <Select 
                            name='subject' 
                            label='Matéria'
                            value={subject} 
                            onChange={(e) => { setSubject (e.target.value)}} 
                            options={[
                            {value:'Artes', label:'Artes' },
                            {value:'Matemática', label:'Matemática' },
                            {value:'Biologia', label:'Biologia' },
                            {value:'Português', label:'Português' },
                            {value:'Redação', label:'Redação' },
                            {value:'Física', label:'Física' }

                        ]}/>
                        <Input name='cost' label='Custo da sua hora por aula' value={cost} onChange={(e) => { setCost (e.target.value)}}/>
                    </fieldset>
                    <fieldset>
                        <legend>Horários Disponiveis
                            <button type='button' onClick={addNewScheduleItem}>+ Novo horário</button>
                        </legend>
                        {scheduleItems.map((scheduleItem, index) =>
                        <div key={scheduleItem.week_day} className='schedule-item'>
                            <Select  
                                name='week_day' 
                                label='Dia da Semana'
                                value={scheduleItem.week_day }
                                onChange={e => setScheduleItemsValue(index, 'week_day', e.target.value)}  
                                options={[
                                {value:'0', label:'Domingo' },
                                {value:'1', label:'Segunda-Feira' },
                                {value:'2', label:'Terça-feira' },
                                {value:'3', label:'Quarta-Feira' },
                                {value:'4', label:'Quinta-Feira' },
                                {value:'5', label:'Sexta-Feira' },
                                {value:'6', label:'Sábado' }                        
                            ]}/>
                            <Input name='from' label='Das' type='time' value={scheduleItem.from } onChange={e => setScheduleItemsValue(index, 'from', e.target.value)}   />
                            <Input name='to' label='Até' type='time' value={scheduleItem.to} onChange={e => setScheduleItemsValue(index, 'to', e.target.value)}   />
                        </div>
                        )}
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt='Aviso importante' />
                            Importante!<br />
                            Preencha todos os dados
                        </p>
                        <button type='submit'>
                            Salvar Cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;