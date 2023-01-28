import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  BgContainer,
  TextEditorContainer,
  TextDetails,
  TextHeading,
  EditorImg,
  TextContainer,
  ButtonContainer,
  ListButton,
  Button,
  HrLine,
  TextArea,
} from './styledComponents'

class Home extends Component {
  state = {isBold: false, isItalic: false, isUnderLine: false}

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isUnderLine: !prevState.isUnderLine}))
  }

  render() {
    const {isBold, isItalic, isUnderLine} = this.state
    const boldColor = isBold ? '#faff00' : '#f1f5f9'
    const italicColor = isItalic ? '#faff00' : '#f1f5f9'
    const underlineColor = isUnderLine ? '#faff00' : '#f1f5f9'

    return (
      <BgContainer>
        <TextEditorContainer>
          <TextDetails>
            <TextHeading>Text Editor</TextHeading>
            <EditorImg
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt=" text editor"
            />
          </TextDetails>
          <TextContainer>
            <ButtonContainer>
              <ListButton>
                <Button
                  data-testid="bold"
                  color={boldColor}
                  onClick={this.onClickBold}
                >
                  <VscBold />
                </Button>
              </ListButton>
              <ListButton>
                <Button
                  data-testid="italic"
                  color={italicColor}
                  onClick={this.onClickItalic}
                >
                  <GoItalic />
                </Button>
              </ListButton>
              <ListButton>
                <Button
                  data-testid="underline"
                  color={underlineColor}
                  onClick={this.onClickUnderline}
                >
                  <AiOutlineUnderline />
                </Button>
              </ListButton>
            </ButtonContainer>
            <HrLine />
            <TextArea
              cols="60"
              row="80"
              bold={isBold}
              italic={isItalic}
              underline={isUnderLine}
            />
          </TextContainer>
        </TextEditorContainer>
      </BgContainer>
    )
  }
}

export default Home
