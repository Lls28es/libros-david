import { useRouter } from 'next/router';

const CheckSession = (inside) => {
  //const router = useRouter();
  //const dispatch = useDispatch();
  if (typeof window !== 'undefined') {
    let sessionCheck = localStorage.getItem('us_tok');
    if (inside) {
      if (!sessionCheck) {
        window.location.href = '/auth/login';
      }
    } else {
      if (sessionCheck) {
        let logged = JSON.parse(localStorage.getItem('us_adta'));
        if (logged?.user) {
          window.location.href = `/`;
        } else {
          console.log('3');
          localStorage.removeItem('us_tok');
          localStorage.removeItem('us_adta');
          window.location.href = '/auth/login';
        }
      }
    }
  }
};
export default CheckSession;
