import { Button } from './components/Button';
import { TextInput } from './components/TextInput';
import './styles/global.css';
import {Envelope} from  'phosphor-react'
import { CheckBox } from './components/CheckBox';
import { Text } from './components/Text';

export function App() {
  return (
    <div>    
      <h1 className='font-bold text-2xl text-violet-500'>Hellow Word</h1>

      {/* <button className='bg-cian-500 font-medium px-4 py-2 rounded text-white hover:bg-cian-300'>
      Enviar
      </button> */}
      <Button children={"Clique para entrar"}/>

      <TextInput.Root>
        <TextInput.Icon>
            <Envelope/>
        </TextInput.Icon>
        <TextInput.Input placeholder="Type your e-mail adress"/>
      </TextInput.Root>
      <div className="flex items-center gap-2">
        <CheckBox/>  <Text size="sm">Lembre-me de mim por 30 dias</Text>
      </div>
    </div>

  )
}


