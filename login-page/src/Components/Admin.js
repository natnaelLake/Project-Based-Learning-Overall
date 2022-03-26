import React, { Component } from 'react'

class Admin extends Component {


  onLoad = function(){
    "use strict";
    /* ----------------
      TABS
      This tab script is by Misti Wolanski
      http://mistiwolanski.com | https://github.com/Carradee
      If you use id script, please give credit where it’s due.
    ---------------- */
    // Declare all variables
      var buttons = document.querySelectorAll(".tabs button");
      var current_button;
      var sections = document.querySelectorAll(".tabs section");
      var current_section;
    
    // show the first tabs
      buttons[0].classList.add("active");
      sections[0].classList.add("active");
    
    // set up onclick
      buttons.forEach(function(element){
        element.onclick = changeTab;
      }); // end forEach
    
    // get ".active" button
    function getCurrentButton() {
      buttons.forEach(function(element){
        if (element.classList.contains('active')) {
          current_button = element;
        } // end if
      }); // end forEach
      return current_button;
    } // end getCurrentButton()
    
    // get ".active" section
    function getCurrentSection() {
      sections.forEach(function(element){
        if (element.classList.contains('active')) {
          current_section = element;
        } // end if
      }); // end forEach
      return current_section;
    } // end getCurrentSection()
    
    // remove ".active" from inactive sections
    function hideTab() {
      console.log("hideTab() has been run");
      current_section.classList.remove("active");
      current_button.classList.remove("active");
    } // end hideTab()
    
    // add ".active" to active section
    function showTab(id) {
      console.log("showTab(id) has been run");
      sections.forEach(function(element){
        if (element.id === id) {
          element.classList.add("active");
        } // end if
      }); // end forEach
    } // end showTab(id)
    
    function changeTab() {
    //  console.log("changeTab() has been run");
      current_button = getCurrentButton();
      current_section = getCurrentSection();
      if (this.name !== current_button.name) {
        this.classList.add("active");
        hideTab();
        showTab(this.name);
      } // end if 
    } // end changeTab()
    
      
    }; // end window.onload




  render() {
    return (
        <div>
                <h1>Responsive vertical tabs with vanilla JS</h1>
                <section class='tabs'>
                  <div class='button-list'>
                    <button name='content1'>Kitteh 1</button>
                    <button name='content2'>Kitteh 2</button>
                    <button name='content3'>Kitteh 3</button>
                  </div>
                
                  <section id='content1'>
                <figure>
                  <a href="http://lorempixel.com"><img alt='placeholder image 1' src="http://lorempixel.com/600/450/cats/1" /></a>
                  <figcaption>I iz fluffy kitteh</figcaption>
                 </figure>
                  </section>
                
                  <section id='content2'>
                 <figure>
                  <a href="http://lorempixel.com"><img alt='placeholder image 2' src="http://lorempixel.com/600/450/cats/2" /></a>
                  <figcaption>scram, pup</figcaption>
                 </figure>
                </section>
                
                  <section id='content3'>
                <figure>
                  <a href="http://lorempixel.com"><img alt='placeholder image 3' src="http://lorempixel.com/600/450/cats/3" /></a>
                  <figcaption>must i warn u?</figcaption>
                 </figure>
                </section>
                </section>
                
                <br />
                
                <section id='about_this_script' class='text'>
                <h2>To use this script:</h2>
                <ul>
                  <li>Install the JS.</li>
                  <li>Install the CSS (marked in the CSS area).</li>
                  <li>Set up your HTML in this format:<pre><code>&lt;section class='tabs'&gt;
                  &lt;div class='button-list'&gt;
                    &lt;button name='tab_1_ID'&gt;tab_1_TITLE&lt;/button&gt;
                    &lt;button name='tab_2_ID'&gt;tab_2_TITLE&lt;/button&gt;
                    &lt;button name='tab_3_ID'&gt;tab_3_TITLE&lt;/button&gt;
                  &lt;/div&gt;&lt;!-- / .button-list --&gt;
                
                  &lt;section id='tab_1_ID'&gt;
                    tab_1_CONTENT
                  &lt;/section&gt;&lt;!-- / #tab_1_ID --&gt;
                
                  &lt;section id='tab_2_ID'&gt;
                    tab_2_CONTENT
                  &lt;/section&gt;&lt;!-- / #tab_2_ID --&gt;
                
                  &lt;section id='tab_3_ID'&gt;
                    tab_3_CONTENT
                  &lt;/section&gt;&lt;!-- / #tab_3_ID --&gt;
                &lt;/section&gt;&lt;!-- / .tabs --&gt;
                </code></pre>
                  </li>
                </ul>
                <h2>Notes about this script:</h2>
                <ul>
                  <li>Notice that you don&rsquo;t have to add a class name to anything. The JS automatically sets the first tab to display.</li>
                  <li>The section vs. div is arbitrary&mdash;you can change them to whatever you want, just make sure to keep the class names.</li>
                </ul>
                </section>
                
                <footer class='text'>
                  <p>This script is by Misti Wolanski (<a href='http://mistiwolanski.com'>website</a> | <a href='https://github.com/Carradee'>GitHub</a>). If you use this script, please give credit where it&rsquo;s due.</p>
                  </footer>
      </div>
    )
  }
}

export default Admin