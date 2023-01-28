import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TextEditorContainer = styled.div`
  background-color: #1b1c22;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  padding: 20px;
`

export const TextDetails = styled.div`
  text-align: center;
  padding-top: 20px;
`

export const TextHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff;
`

export const EditorImg = styled.img`
  margin-top: 40px;
  width: 80%;
`

export const TextContainer = styled.div`
  background-color: #25262c;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  width: 50%;
`

export const ButtonContainer = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  padding: 10px;
  padding-bottom: 0px;
`

export const ListButton = styled.li`
  margin-right: 10px;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${props => props.color};
`
export const HrLine = styled.hr`
  border: 1px solid #cbd5e1;
  padding: 0px;
`

export const TextArea = styled.textarea`
  background-color: transparent;
  border: none;
  color: #f8fafc;
  outline: none;
  padding-top: 20px;
  padding-left: 20px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
`
