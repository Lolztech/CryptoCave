import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <button className="login-button" onClick={() => navigate('/login')}>Log In</button>
      <div className="content-wrapper">
        <h1>CryptoCave</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper vehicula sem, semper maximus lacus rutrum in. In erat dui, lacinia eget ex eu, convallis lobortis nunc. Suspendisse id pellentesque risus, nec commodo diam. Etiam nunc enim, placerat nec congue eu, auctor ut mi. Proin arcu est, sollicitudin ac malesuada at, semper sit amet metus. Donec vitae ex ante. Nullam ullamcorper, est ac pulvinar venenatis, sapien mauris porttitor lacus, a commodo ipsum sapien ut metus. Aliquam erat volutpat. Proin sodales erat non purus congue, id auctor nibh bibendum. Sed nec ipsum id quam fringilla porttitor. Quisque at purus ac mi congue eleifend in et velit. Etiam at nisi sed felis dictum volutpat non quis orci. Proin quam justo, pellentesque id feugiat a, elementum sed turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Fusce sollicitudin, ante at iaculis eleifend, lorem libero ultricies elit, sed luctus elit magna quis sapien. Proin sed vestibulum velit, vitae tincidunt nisl. Phasellus tempus, enim eget convallis efficitur, erat erat convallis lorem, id bibendum nibh neque quis purus. Donec sollicitudin pretium nulla pharetra finibus. Aenean nec nisi sapien. Ut ut nunc nisl. Aliquam mattis lobortis magna, ultrices malesuada elit rutrum nec.

Morbi suscipit sem lacus. Suspendisse sit amet iaculis libero. Aliquam erat volutpat. Sed iaculis bibendum est eget scelerisque. Vestibulum et augue nec tortor finibus facilisis. Duis fringilla odio velit, vitae hendrerit ipsum efficitur at. Cras vitae augue porttitor quam blandit tempor vel at augue. Nullam sollicitudin ac risus nec suscipit. Aliquam erat volutpat. Sed iaculis leo a diam faucibus, quis consequat lorem pellentesque. Mauris pulvinar, tortor sit amet sagittis dictum, velit mauris euismod nulla, eget sagittis risus sem venenatis mi. Suspendisse rhoncus neque vitae quam dignissim, ac volutpat nisi porttitor.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi dictum finibus volutpat. Proin sed accumsan nunc, sit amet facilisis nunc. Aenean tristique tincidunt nibh at dapibus. Aenean ullamcorper, lorem consectetur mollis commodo, dui lacus tempus dui, in laoreet ex velit vel magna. Sed pellentesque feugiat felis, ut blandit mauris aliquet et. Nam tempor nisl eget molestie feugiat. Aenean facilisis sed dui a semper. Aliquam a tincidunt turpis. Vivamus hendrerit lacinia dictum. Duis in fringilla nibh, non vulputate nibh. Sed at vestibulum ligula. In hac habitasse platea dictumst. Phasellus placerat pellentesque malesuada. Vivamus lacinia massa tellus, non gravida lacus euismod quis.

Proin sit amet lobortis dolor, et vulputate lacus. Donec vehicula fermentum velit, tristique porta nibh convallis sed. Maecenas ac risus ante. Praesent congue maximus efficitur. Phasellus fermentum massa condimentum fermentum elementum. Pellentesque vitae mauris scelerisque, sollicitudin diam ut, iaculis ante. Nulla sed purus viverra, facilisis metus elementum, sollicitudin magna..</p>
        <button className="join-us-button" onClick={() => navigate('/signup')}>Join Us</button>
      </div>
    </div>
  );
}

export default LandingPage;
