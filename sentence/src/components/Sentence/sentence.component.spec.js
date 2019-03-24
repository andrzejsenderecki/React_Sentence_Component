import React from 'react';
import Sentence from './Sentence.js';
import App from '../../App.js';
import Paragraph from './Paragraph/Paragraph.js';
import Button from './Button/Button.js';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

// Sprawdzanie, czy komponent <Sentence /> przyjmuje props "time" o wartości 100
it('Check props.time in first <Sentences />', () => {
    const wrapper = () => shallow(<App />)
    expect(wrapper().find(Sentence).prop('time')).toEqual(100);
})

// Sprawdzanie, czy komponent <Sentence /> przyjmuje props "sentences"
it('Check props.time in first <Sentences />', () => {
    const wrapper = () => shallow(<App />)
    expect(wrapper().find(Sentence).prop('sentences')).toEqual([
        'Pierwsza sentencja',
        'Druga sentencja',
        'Trzecia sentencja',
        'Czwarta sentencja'
    ]);
})

// Sprawdzanie, czy komponent renderuje 2 komponenty <Paragraph />
it('Renders <Paragraph />', () => {
    const wrapper = shallow(<Sentence sentences={['Pierwsza','Druga','Trzecia','Czwarta']} />)
    expect(wrapper.find(Paragraph).length).toBe(3)
})

// Sprawdzanie, czy komponent renderuje 2 komponenty <Button />
it('Renders <Button />', () => {
    const wrapper = shallow(<Sentence sentences={['Pierwsza','Druga','Trzecia','Czwarta']} />)
    expect(wrapper.find(Button).length).toBe(2)
})

// Sprawdzenie, czy pierwszy komponent <Paragraph /> prawidłowo przyjmuje state.sentenceA
it('Check state.sentenceA in first <Paragraph />', ()=> {
    const wrapper = mount(<Sentence sentences={['Pierwsza','Druga','Trzecia','Czwarta']} />)
    wrapper.setState({sentenceA:'Pierwsza sentencja'})
    expect(wrapper.find('p').first().text()).toEqual('Pierwsza sentencja')
})

// Sprawdzenie, czy drugi komponent <Paragraph /> prawidłowo przyjmuje state.sentenceB
it('Check state.sentenceB in second <Paragraph />', ()=> {
    const wrapper = mount(<Sentence sentences={['Pierwsza','Druga','Trzecia','Czwarta']} />)
    wrapper.setState({sentenceB:'Druga sentencja'})
    expect(wrapper.find('p').at(1).text()).toEqual('Druga sentencja')
})

// Sprawdzanie, czy pierwszy komponent <Button /> posiada props "text" o wartości 'Wariant 1'
it('Check props.text in first <Button />', () => {
    const wrapper = () => shallow(<Sentence sentences={['Pierwsza','Druga','Trzecia','Czwarta']} />).find(Button).first()
    expect(wrapper().prop('text')).toEqual('Wariant 1');
})

// Sprawdzanie, czy drugi komponent <Button /> posiada props "text" o wartości 'Wariant 2'
it('Check props.text in second <Button />', () => {
    const wrapper = () => shallow(<Sentence sentences={['Pierwsza','Druga','Trzecia','Czwarta']} />).find(Button).at(1)
    expect(wrapper().prop('text')).toEqual('Wariant 2');
})

// Sprawdzanie, czy kliknięcie przycisku 'Wariant 1' wykona przypisaną do przycisku metodę,
// zmieni state i wyświetli zmieniony napis na podstawie state.option 
it('Check event on first <Button />', ()=>{
    const wrapper = mount(<Sentence sentences={['Pierwsza','Druga','Trzecia','Czwarta']} />);
    wrapper.find(Button).at(1).simulate('click');
    expect(wrapper.find(Paragraph).at(2).prop('variant')).toEqual('Aktualny wariant: 2');
    wrapper.find(Button).at(0).simulate('click');
    expect(wrapper.find(Paragraph).at(2).prop('variant')).toEqual('Aktualny wariant: 1');
})

// Sprawdzanie, czy kliknięcie przycisku 'Wariant 2' wykona przypisaną do przycisku metodę,
// zmieni state i wyświetli zmieniony napis na podstawie state.option 
it('Check event on second <Button />', ()=>{
    const wrapper = mount(<Sentence sentences={['Pierwsza','Druga','Trzecia','Czwarta']} />);
    expect(wrapper.find(Paragraph).at(2).prop('variant')).toEqual('Aktualny wariant: 1');
    wrapper.find(Button).at(1).simulate('click');
    expect(wrapper.find(Paragraph).at(2).prop('variant')).toEqual('Aktualny wariant: 2');
})