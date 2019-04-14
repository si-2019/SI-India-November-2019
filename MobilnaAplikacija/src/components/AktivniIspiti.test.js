import React from 'react';
import AktivniIspiti from './AktivniIspiti';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

it("Postoji li naslov", () => {
  const wrapper = shallow(<AktivniIspiti />);
  expect(wrapper.find("#t1").exists()).toBe(true);
});
it("Postoji li prijava za prvi ispit", () => {
    const wrapper = shallow(<AktivniIspiti />);
    expect(wrapper.find("#t2").exists()).toBe(true);
  });
  it("Postoji li prijava za drugi ispit", () => {
    const wrapper = shallow(<AktivniIspiti />);
    expect(wrapper.find("#t3").exists()).toBe(true);
  });
  it("Postoji li prijava za treci ispit", () => {
    const wrapper = shallow(<AktivniIspiti />);
    expect(wrapper.find("#t4").exists()).toBe(true);
  });

  it("Postoji li prijava za cetvrti ispit", () => {
    const wrapper = shallow(<AktivniIspiti />);
    expect(wrapper.find("#t5").exists()).toBe(true);
  });

