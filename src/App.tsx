import './App.css';
import Button from './components/muiComponents/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from './components/muiComponents/TextField';

const App = () => {
  // const personName = {
  //   firstName: 'Bruce',
  //   lastName: 'Wayne'
  // }

  // const nameList = [
  // {
  //   firstName: 'Wayne',
  //   lastName: 'Bruce'
  // },
  // {
  //   firstName: 'Clark',
  //   lastName: 'Kent'
  // },
  // {
  //   firstName: 'Princess',
  //   lastName: 'Diana'
  // }
  // ]

  // return (
  //   // <ParentComponent />
  //   <Counter />
  // )

  // return (
  //   <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
  //     {/* <Greet name="React+Typescript" messageCount={20} isLoggedIn={false} />
  //     <Person name={personName} />
  //     <PersonList names={nameList} /> */}
  //     {/* <Status status='loading' />
  //     <Heading>Placeholder text</Heading>
  //     <Oscar>
  //       <Heading>Oscar goras to Monkey D' Luffy!</Heading>
  //     </Oscar>
  //     <Greet name='Dhanraj' isLoggedIn={false} /> */}
  //     {/* <Button handleClick={(event, id) => {
  //       console.log('Button Clicked!', event, id);
  //     }} />
  //     <Input value='' handleChange={event => console.log(event)} /> */}
  //     {/* <Container styles={{ border: '1px solid black', padding: '1rem', display: 'flex', justifyContent: "center" }} /> */}
  //     {/* <LoggedIn /> */}
  //     {/* <User /> */}
  //     {/* <Counter /> */}
  //     {/* <UserContextProvider>
  //       <User />
  //     </UserContextProvider> */}
  //     {/* <DomRef />
  //     <MutableRef /> */}
  //     {/* <Counter message='The count value is' /> */}
  //     {/* <Login /> */}
  //     {/* <Private isLoggedIn={true} component={Profile} /> */}
  //     {/* <Private isLoggedIn={false} component={Login} /> */}
  //     {/* <List
  //       items={['Batman', 'Superman', 'Wonder Woman']}
  //       onClick={(item) => console.log(item)}
  //     /> */}
  //     {/* <List
  //       items={[
  //         {
  //           id:1,
  //           firstName: 'Wayne',
  //           lastName: 'Bruce'
  //         },
  //         {
  //           id:2,
  //           firstName: 'Clark',
  //           lastName: 'Kent'
  //         },
  //         {
  //           id:3,
  //           firstName: 'Princess',
  //           lastName: 'Diana'
  //         }
  //       ]}
  //       onClick={(item) => console.log(item)}
  //     /> */}
  //     {/* <RandomNumber value={9} isPositive /> */}
  //     {/* <Toast position="left-center" /> */}
  //     {/* <CustomButton variant='primary' onClick={() => console.log('Clicked!')} >
  //       <div>Primary Button</div>
  //     </CustomButton> */}
  //     {/* <CustomButton variant='primary' onClick={() => console.log('Clicked!')} >Primary Button</CustomButton> */}
  //     {/* <CustomInput type='text' /> */}
  //     {/* <CustomizedButton variant='primary' onClick={() => console.log('Clicked!')}>CBtn</CustomizedButton> */}
  //     <ParentComponent />
  //     {/* <Button variant="outlined" onClick={() => console.log('clicked')} endIcon={<SendIcon />} >submit</Button> */}
  //   </div>
  // );

  return (
    // <Button variant="contained" endIcon={<SendIcon />}>send</Button>
    <div style={{ paddingTop: 50, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <TextField variant="outlined" onChange={(e) => console.log(e.target.value)} required={true} error={true} />
    </div>
  )
}

export default App;
