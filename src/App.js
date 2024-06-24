import './App.css';
import { RouterProvider, createBrowserRouter }
 from 'react-router-dom';
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
const router=createBrowserRouter([
{path:'/', 
    element:<Main></Main>, 
    children:[
    {path:'/', element:<Home></Home>},
    {path:'home', element:<Home></Home>},  
    {path:'products', 
    element:<Products></Products>},
    {path:'friends',
    loader:async()=>{
      return fetch
    ('https://jsonplaceholder.typicode.com/users')
    },
     element:<Friends></Friends>},
     {      
      path:'/friend/:friendId',
      loader: async ({params})=>{
return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
     
      element:<FriendDetails></FriendDetails>
     },  
     {
      path:'posts', 
      loader:async()=>{
        return fetch('https://jsonplaceholder.typicode.com/posts')
      },
        element:<Posts></Posts>
     },
     {
      path:'/post/:postId',
      loader: async({params})=>{
        return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      element:<PostDetails></PostDetails>
     },  
   ]
},   
  {path:'about', element:<About></About>},
  { path:'*', element: <div>OOPS!#404# This Route Not Found</div>}
])
  return (
    <div className="App">     
    <RouterProvider router={router}></RouterProvider>;
    </div>
  );
}
export default App;
